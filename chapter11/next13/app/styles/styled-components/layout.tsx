import { ReactNode } from 'react'

import StyledComponentsRegistry from '#components/StyledComponentsRegistry'

export default function Layout({ children }: { children: ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
}
