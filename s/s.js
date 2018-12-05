import spawn, { fork } from 'spawncommand'
import cleanStack from '@artdeco/clean-stack'
import { askSingle, confirm } from 'reloquent'

async function run() {
  const f = fork('src/cli', [], {
    stdio: 'pipe',
  })
  const res = await f.promise
  const [,r] = /Cannot find module '(.+?)'/.exec(res.stderr) || []
  if (r) {
    console.log('MISSING %s', r)
    const a = await confirm(`Install ${r}?`)
    if (!a) return
    console.log(' yarn add -E %s', r)
    const p = spawn('yarn', ['add', '-E', r])
    const rres = await p.promise
    if (rres.code != 0) throw new Error(rres.stderr)
    await confirm(`${r} installed. Continue?`)
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