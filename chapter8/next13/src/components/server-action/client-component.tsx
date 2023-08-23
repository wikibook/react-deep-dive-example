'use client'
import { useCallback, useTransition } from 'react'
import { updateData } from '#server-action'
import { SkeletonBtn } from '#components/components'

export function ClientButtonComponent({ id }: { id: string }) {
  const [isPending, startTransition] = useTransition()

  const handleClick = useCallback(() => {
    startTransition(() => updateData(id, { name: '기본값', age: 0 }))
  }, [])

  return isPending ? (
    <SkeletonBtn />
  ) : (
    <button onClick={handleClick}>기본값으로 돌리기</button>
  )
}
