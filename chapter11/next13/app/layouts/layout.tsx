import { ReactNode } from 'react'
import { TabGroup } from '#components/TabGroup'
import { fetchUsers } from '#services/server'

export default async function Layout({ children }: { children: ReactNode }) {
  const users = await fetchUsers()

  const items = [
    {
      text: 'Home',
    },
    ...users.map((user) => ({
      text: user.name,
      slug: user.id.toString(),
    })),
  ]

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup path="/layouts" items={items} />
      </div>

      <div>{children}</div>
    </div>
  )
}
