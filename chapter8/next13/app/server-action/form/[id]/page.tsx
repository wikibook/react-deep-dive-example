import kv from '@vercel/kv'
import { revalidatePath } from 'next/cache'

interface Data {
  name: string
  age: number
}

export default async function Page({ params }: { params: { id: string } }) {
  const key = `test:${params.id}`
  const data = await kv.get<Data>(key)

  async function handleSubmit(formData: FormData) {
    'use server'

    const name = formData.get('name')
    const age = formData.get('age')

    await kv.set(key, {
      name,
      age,
    })

    revalidatePath(`/server-action/form/${params.id}`)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">form with data</h1>
      <h2 className="text-l font-medium text-gray-400/80">
        서버에 저장된 정보: {data?.name} {data?.age}
      </h2>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>아래 버튼을 누르면 서버에서 직접 form 요청을 보냅니다.</li>
          <form action={handleSubmit}>
            <li>
              <label htmlFor="name">이름: </label>
              <input
                type="text"
                id="name"
                name="name"
                defaultValue={data?.name}
                placeholder="이름을 입력해주세요."
              />
            </li>

            <li>
              <label htmlFor="age">나이: </label>
              <input
                type="number"
                id="age"
                name="age"
                defaultValue={data?.age}
                placeholder="나이를 입력해주세요."
              />
            </li>

            <li>
              <button type="submit">submit</button>
            </li>
          </form>
        </ul>
      </div>
    </div>
  )
}
