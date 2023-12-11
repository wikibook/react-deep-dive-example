import SubPage from './sub'
import { API_URL_BASE } from '#services/constant'

export default async function Page({ params }: { params: { userId: string } }) {
  const response = await fetch(`${API_URL_BASE}/api/users/${params.userId}`)
  const user = await response.json()

  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          이름: {user.name}
        </h1>
      </div>
      {/* @ts-expect-error Async Server Component */}
      <SubPage params={{ userId: params.userId }} />
    </>
  )
}
