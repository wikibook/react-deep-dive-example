import { notFound } from 'next/navigation'
import { ReactNode } from 'react'

export default function Page(): ReactNode | Promise<ReactNode> {
  if (true.toString() === 'true') {
    notFound()
  }

  return <>렌더링 되지 않습니다.</>
}
