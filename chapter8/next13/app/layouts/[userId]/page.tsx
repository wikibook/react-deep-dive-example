import { fetchUserById } from '#services/server'

export default async function Page({ params }: { params: { userId: string } }) {
  const user = await fetchUserById(params.userId)
  if (!user) {
    return null
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        이름: {user.name}
      </h1>
    </div>
  )
}
