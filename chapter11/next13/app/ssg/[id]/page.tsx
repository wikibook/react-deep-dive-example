import { fetchPostById } from '#services/server'

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]
}

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchPostById(params.id)

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.body}</p>
    </div>
  )
}
