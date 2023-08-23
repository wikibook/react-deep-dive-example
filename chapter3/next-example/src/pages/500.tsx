import { useCallback } from 'react'

export default function My500Page() {
  const handleClick = useCallback(() => {
    console.log('hi') // eslint-disable-line no-console
  }, [])

  return (
    <h1>
      (500페이지) 서버에서 에러가 발생했습니다.{' '}
      <button onClick={handleClick}>클릭</button>
    </h1>
  )
}
