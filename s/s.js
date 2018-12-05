import spawn, { fork } from 'spawncommand'
import cleanStack from '@artdeco/clean-stack'
import { askSingle, confirm } from 'reloquent'
import { dependencies, devDependencies } from './t.json'

const DD = { ...dependencies, ...devDependencies }

async function run() {
  const f = fork('src/cli', [], {
    stdio: 'pipe',
  })
  const res = await f.promise
  const [,r] = /Cannot find module '(.+?)'/.exec(res.stderr) || []
  if (r) {
    console.log('MISSING %s', r)
    const version = DD[r]
    if (!version) throw new Error('Unknown version')
    const exact = `${r}@${version}`
    const a = await confirm(`Install ${exact}?`)
    if (!a) return
    console.log(' yarn add -E %s', exact)
    const p = spawn('yarn', ['add', '-E', exact])
    const rres = await p.promise
    if (rres.code != 0) throw new Error(rres.stderr)
    // await confirm(`${r} installed. Continue?`)
    await run()
  }
}

(async () => {
  try {
    await run()
  } catch ({ stack }) {
    console.log(stack)
  }
})()