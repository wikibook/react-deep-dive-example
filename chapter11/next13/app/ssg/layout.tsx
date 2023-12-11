import { ReactNode } from 'react'

import { TabGroup } from '#components/TabGroup'

const ids = [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        <TabGroup
          path="/ssg"
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
        <div className="self-start whitespace-nowrap rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100">
          마지막 렌더링 시간 (프로덕션 모드만 확인 가능)
          {new Date().toLocaleTimeString()}
        </div>
      </div>

      <div>{children}</div>
    </div>
  )
}
