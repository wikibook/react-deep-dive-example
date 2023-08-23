import { fetchPostById } from '#services/server'

export default async function Page({ params }: { params: { id: string } }) {
  const data = await fetchPostById(params.id, { cache: 'no-cache' })

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.body}</p>
    </div>
  )
}
