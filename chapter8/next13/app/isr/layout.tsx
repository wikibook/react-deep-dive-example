import { ReactNode } from 'react'
import { TabGroup } from '#components/TabGroup'

const ids = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/isr"
          items={[
            {
              text: 'Home',
            },
            ...ids.map((x) => ({
              text: `Post ${x.id}`,
              slug: x.id,
            })),
          ]}
        />
      </div>

      <div>{children}</div>
    </div>
  )
}
