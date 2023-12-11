import { ReactNode } from 'react'
import { fetchUsers } from '#services/server'
import { CounterProvider } from '#context/counter'
import { TabGroup } from '#components/TabGroup'

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
    <CounterProvider>
      <div className="space-y-9">
        <div className="flex justify-between">
          <TabGroup path="/context" items={items} />
        </div>

        <div>{children}</div>
      </div>
    </CounterProvider>
  )
}
