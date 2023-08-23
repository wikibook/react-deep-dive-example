import { ReactNode } from 'react'
import { TabGroup } from '#components/TabGroup'

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/grouped-layouts"
          items={[
            {
              text: 'Home',
            },
            { text: 'users', slug: 'users' },
            { text: 'todos', slug: 'todos' },
            { text: 'hello', slug: 'hello' },
          ]}
        />
      </div>
      <div>{children}</div>
    </div>
  )
}
