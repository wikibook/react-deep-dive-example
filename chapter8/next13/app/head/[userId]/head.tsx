import DefaultHeader from '#components/DefaultHeader'
import { API_URL_BASE } from '#services/constant'

export default async function Head({ params }: { params: { userId: string } }) {
  const response = await fetch(`${API_URL_BASE}/api/users/${params.userId}`)
  const user = await response.json()

  return (
    <>
      <DefaultHeader />
      <title>{user.name}</title>
      <meta name="description" content="head를 재정의해보았습니다." />
    </>
  )
}
