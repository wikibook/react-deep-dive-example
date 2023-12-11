import { useCallback } from 'react'

export default function My404Page() {
  const handleClick = useCallback(() => {
    console.log('hi') // eslint-disable-line no-console
  }, [])
  return (
    <h1>
      페이지를 찾을 수 없습니다. <button onClick={handleClick}>클릭</button>
    </h1>
  )
}
