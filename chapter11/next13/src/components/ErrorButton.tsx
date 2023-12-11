'use client'

import { useCallback, useState } from 'react'

export default function ErrorButton() {
  const [clicked, setClicked] = useState(false)

  const handleButtonClick = useCallback(() => {
    setClicked(true)
  }, [])

  if (clicked) {
    // 임의로 발생시킨 에러
    throw new Error('clicked 로 인해 발생한 에러')
  }

  return (
    <button
      className="rounded-lg px-3 py-1 text-sm font-medium bg-red-600 text-red-50 hover:bg-red-500 hover:text-white"
      onClick={handleButtonClick}
    >
      에러 던지기!
    </button>
  )
}
