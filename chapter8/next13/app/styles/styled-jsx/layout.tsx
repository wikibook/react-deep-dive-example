import { ReactNode } from 'react'

import StyledJsxRegistry from './StyledRegistry'

export default function Layout({ children }: { children: ReactNode }) {
  return <StyledJsxRegistry>{children}</StyledJsxRegistry>
}
