import { fetchPostById } from '#services/server'

export const dynamicParams = true

export const revalidate = 15 // revalidate this page every 60 seconds

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchPostById(params.id)

  console.log(`generate page ${params.id}`)

  return (
    <div className="space-y-4">
      <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
        마지막 렌더링 시간 (프로덕션 모드만 확인 가능): UTC{' '}
        {new Date().toLocaleTimeString()}
      </div>
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.body}</p>
    </div>
  )
}
