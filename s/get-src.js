/**
 * This script that the bro will write will see the source code file and find it on github with the rqt
 */
import rqt from 'rqt'
import readDirStructure from '@wrote/read-dir-structure'

(async () => {
  const { content } = await readDirStructure('src')
  console.log(content)
})()

