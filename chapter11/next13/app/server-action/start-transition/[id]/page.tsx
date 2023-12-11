import kv from '@vercel/kv'
import { ClientButtonComponent } from '#components/server-action/client-component'

interface Data {
  name: string
  age: number
}

export default async function Page({ params }: { params: { id: string } }) {
  const key = `test:${params.id}`
  const data = await kv.get<Data>(key)

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">form with data</h1>
      <h2 className="text-l font-medium text-gray-400/80">
        서버에 저장된 정보: {data?.name} {data?.age}
      </h2>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>아래 버튼을 누르면 서버에서 직접 form 요청을 보냅니다.</li>
          <li>이 작업은 useTransition을 기반으로 실행됩니다.</li>
          <li>
            <ClientButtonComponent id={params.id} />
          </li>
        </ul>
      </div>
    </div>
  )
}
