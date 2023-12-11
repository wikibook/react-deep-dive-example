import { fetchUsers } from '#services/server'

export default async function Page() {
  const users = await fetchUsers()

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        url: /groped-layouts/users
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}
