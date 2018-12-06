'use strict';

/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

const idioCore = require('@idio/core')
const proxy = require('koa-better-http-proxy')
const compose = require('koa-compose')

const PROD = process.env.NODE_ENV == 'production'

;(async () => {
  const port = process.env.PORT || 5000
  const { router, app, url,
    middleware: { bodyparser } } = await idioCore({
    // logger: { use: PROD },
    session: {
      use: true,
      keys: [process.env.SESSION_KEY || 'local-key'],
    },
    static: {
      use: true,
      root: ['static', 'optimize', 'optimize/bundles/src/ui'],
      maxage: PROD ? 1000 * 60 * 60 * 24 : null,
    },
    bodyparser: {},
  }, { port })
  router.post('/auth', bodyparser, Login)
  app.use(router.routes())

  const p = proxy('http://localhost:5601')
  app.use(PROD ? compose([ checkSession, p]) : p)
  console.log('Proxy started on %s%s', url, PROD ? ' in production mode' : '')
  console.log('Starting server')
  require('./cli')
})()

async function checkSession(ctx, next) {
  if (!ctx.session.user) {
    ctx.redirect('/auth.htm')
  } else await next()
}

// can't use next otherwise will hit proxy but what if next was needed for prev middleware
const Login = async (ctx) => {
  if (!process.env.PASSWORD) {
    ctx.status = 500
    ctx.body = 'The PASSWORD environment variable not set on the container.'
    return
  }
  if (ctx.request.body.password != process.env.PASSWORD) {
    ctx.status = 500
    ctx.body = 'Wrong password'
    return
  }
  ctx.session.user = ctx.request.body.login
  ctx.redirect('/')
}