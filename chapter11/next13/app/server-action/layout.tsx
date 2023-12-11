import { ReactNode } from 'react'

import { TabGroup } from '#components/TabGroup'

export default async function Layout({ children }: { children: ReactNode }) {
  const items = [
    {
      text: 'Home',
    },
  ]

  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup path="/server-action" items={items} />
      </div>

      <div>{children}</div>
    </div>
  )
}
