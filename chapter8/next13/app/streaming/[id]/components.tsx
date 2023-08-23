import { sleep } from '#lib/utils'
import { fetchPosts, fetchUsers } from '#services/server'

export async function Users() {
  // Suspense를 보기 위해 강제로 지연시킵니다.
  await sleep(3 * 1000)
  const users = await fetchUsers()

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}

export async function PostByUserId({ userId }: { userId: string }) {
  await sleep(5 * 1000)
  const allPosts = await fetchPosts()
  const posts = allPosts.filter((post) => post.userId === parseInt(userId, 10))

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}
