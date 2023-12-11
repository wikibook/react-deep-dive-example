import { ReactNode } from 'react'

import { TabGroup } from '#components/TabGroup'

const items = [
  {
    text: 'Global CSS',
    slug: 'global-css',
  },
  {
    text: 'CSS Modules',
    slug: 'css-modules',
  },
  {
    text: 'Styled Components',
    slug: 'styled-components',
  },
  {
    text: 'Styled JSX',
    slug: 'styled-jsx',
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-9">
      <TabGroup
        path="/styles"
        items={[
          {
            text: 'Home',
          },
          ...items,
        ]}
      />
      <div>{children}</div>
    </div>
  )
}
