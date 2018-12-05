import t from './t.json'
import tt from './real-needed.json'
import bosom from 'bosom'

(async () => {
  const deps = Object.keys(tt.dependencies)
  const vers = deps.map(d => {
    const ttt = t.dependencies[d]
    if (!ttt) return { d }
    // console.log('%s@%s', d, ttt)
    return { d, ttt }
  })
  const p = await bosom('package.json')
  // console.log(p)
  // console.log(vers)
  vers.forEach(({ ttt, d }) => {
    if (!ttt) return
    const current =  p.dependencies[d]
    if (current != ttt) console.log('Updating %s %s -> %s', d, current, ttt)
    else return
    p.dependencies[d] = ttt
  })
  await bosom('package.json', p, { space: 2 })
})()