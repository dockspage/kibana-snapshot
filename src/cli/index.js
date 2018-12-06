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

require('./cli');
const idioCore = require('@idio/core')
const proxy = require('koa-proxy')

const PROD = process.env.NODE_ENV != 'production'

;(async () => {
  const port = process.env.PORT || 5000
  const { router, app, url, middleware: { static: Static } } = await idioCore({
    // logger: { use: PROD },
    session: {
      use: true,
      keys: [process.env.SESSION_KEY || 'local-key'],
    },
    static: {
      root: 'static',
      mount: '/auth',
    },
    async checkSession(ctx, next) {
      if (!PROD || ctx.path.startsWith('/auth')) await next()
      else if (!ctx.session.user)
        ctx.redirect('/auth/index.htm')
      else await next()
    },
  }, { port })
  router.get('/auth', async (ctx, next) => {
    if (!process.env.PASSWORD) {
      ctx.status = 500
      ctx.body = 'The PASSWORD environment variable not set on the container.'
      return
    }
    if (ctx.query.password != process.env.PASSWORD) {
      ctx.status = 500
      ctx.body = 'Wrong password'
      return
    }
    ctx.session.user = ctx.query.login
    ctx.redirect('/')
    await next()
  })
  app.use(router.routes())
  app.use(Static)
  app.use(proxy({
    host: 'http://localhost:5601',
    match: /^(?!\/auth)/,
    jar: true,
  }))
  console.log('Proxy started on %s', url)
})()