// 이 코드는 브라우저에서만 실행된다.

/* eslint-disable no-console */
const main = async () => {
  // chrome에서 발생한 네트워크 요청을 복사해서 가져왔다.
  const response = await fetch('http://localhost:3000/stream')
  const reader = response.body.getReader()

  while (true) {
    const { value, done } = await reader.read()
    const str = new TextDecoder().decode(value)
    if (done) {
      break
    }
    console.log(`===================================`)
    console.log(str)
  }

  console.log('Response fully received')
}

main()
