import { dependencies, devDependencies } from './t.json'
import { dependencies as d, devDependencies as dd } from './real-needed.json'

const ddd = [ ...Object.keys(d), ...Object.keys(dd) ]
const all = [ ...Object.keys(dependencies), ...Object.keys(devDependencies) ]

console.log('%s modules required to run', ddd.length)
console.log('%s all modules', all.length)