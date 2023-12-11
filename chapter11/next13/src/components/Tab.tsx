'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'

import { type Item } from './TabGroup'

export const Tab = ({
  path,
  item: { slug, text },
}: {
  path: string
  item: Item
}) => {
  const segment = useSelectedLayoutSegment()
  const href = slug ? path + '/' + slug : path
  const isActive =
    // Example home pages e.g. `/layouts`
    (!slug && segment === null) ||
    // Nested pages e.g. `/layouts/electronics`
    segment === slug

  return (
    <Link
      href={href}
      prefetch={false}
      className={clsx(
        'rounded-lg px-3 py-1 text-sm font-medium',
        isActive
          ? 'bg-vercel-blue text-white'
          : 'bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white',
      )}
    >
      {text}
    </Link>
  )
}
