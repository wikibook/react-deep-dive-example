'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { clsx } from 'clsx'
import { useCallback, useState } from 'react'

import { demos, type Item } from '#constant/menu'

export default function SideBar() {
  const [open, setOpen] = useState(false)
  const handleClose = useCallback(() => setOpen(false), [])
  const handleButtonClick = useCallback(() => setOpen((prev) => !prev), [])

  return (
    <div className="fixed top-0 z-10 flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={handleClose}
        >
          <h3 className="font-semibold tracking-wide text-gray-400 group-hover:text-gray-50">
            Next@13 App Directory 예제
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={handleButtonClick}
      >
        <div className="font-medium text-gray-100 group-hover:text-gray-400">
          Menu
        </div>
      </button>

      <div
        className={clsx(
          'overflow-y-auto lg:static lg:block',
          open ? 'fixed inset-x-0 bottom-0 top-14 mt-px bg-black' : 'hidden',
        )}
      >
        <nav className="space-y-6 px-2 py-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>

                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem
                      key={item.slug}
                      item={item}
                      close={handleClose}
                    />
                  ))}
                </div>
              </div>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item
  close: () => false | void
}) {
  const segment = useSelectedLayoutSegment()
  const isActive = item.slug === segment

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        isActive ? 'text-white' : 'text-gray-400 hover:bg-gray-800',
      )}
    >
      {item.name}
    </Link>
  )
}
