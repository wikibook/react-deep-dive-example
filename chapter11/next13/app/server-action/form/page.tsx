export default function Page() {
  async function handleSubmit() {
    'use server'

    console.log('해당 작업은 서버에서 수행합니다. 따라서 CORS 이슈가 없습니다.')

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })

    const result = await response.json()
    console.log(result)
  }
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">form</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>아래 버튼을 누르면 서버에서 직접 form 요청을 보냅니다.</li>
          <li>
            <form action={handleSubmit}>
              <button type="submit">form 요청 보내보기</button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  )
}
