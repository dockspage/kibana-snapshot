import rqt from 'rqt'
import UserAgent from 'user-agents'

const ua = new UserAgent()

const R = async function() {
  const { userAgent } = ua.random()
  console.log(userAgent)
  await rqt('https://technation.sucks', {
    headers: {
      'User-Agent': userAgent,
    },
  })
}

;(async () => {
  let i = 0
  while(true) {
    await R()
    i++
    console.log(i)
  }
})()