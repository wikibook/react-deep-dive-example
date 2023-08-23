import Counter from '#components/Counter'
import { fetchUserById } from '#services/server'

export default async function Page({ params }: { params: { id: string } }) {
  const user = await fetchUserById(params.id)

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        이름: {user.name}
      </h1>

      <Counter />
    </div>
  )
}
