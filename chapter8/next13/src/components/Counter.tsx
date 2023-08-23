'use client'

import { useCallback } from 'react'

import { useCounter } from '../context/counter'

const Counter = () => {
  const [count, setCount] = useCounter()

  const handleClick = useCallback(
    () => setCount((prev) => prev + 1),
    [setCount],
  )

  return (
    <button
      onClick={handleClick}
      className="rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium tabular-nums text-gray-100 hover:bg-gray-500 hover:text-white"
    >
      {count} Clicks
    </button>
  )
}

export default Counter
