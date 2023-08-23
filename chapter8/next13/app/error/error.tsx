'use client'

import { useEffect } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Error({ error, reset }: any) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('logging error:', error)
  }, [error])

  return (
    <div className="space-y-4">
      <div className="text-sm text-vercel-pink">
        <strong className="font-bold">Error:</strong> {error?.message}
      </div>
      <div>
        <button
          className="rounded-lg px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white"
          onClick={() => reset()}
        >
          에러 리셋
        </button>
      </div>
    </div>
  )
}
