// fetch가 기본 제공 되는 node 19버전 부터 사용가능하다.
// 만약 이하 버전에서 사용하고 싶다면 `node-fetch`를 사용하자.
// const fetch = require('node-fetch')
;(async () => {
  const response = await fetch('http://localhost:3000')

  try {
    for await (const chunk of response.body) {
      // eslint-disable-next-line no-console
      console.log('------chunk-----')
      // eslint-disable-next-line no-console
      console.log(Buffer.from(chunk).toString())
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err.stack)
  }
})()
