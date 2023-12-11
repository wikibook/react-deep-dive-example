import DefaultHeader from '../src/components/DefaultHeader'

export default function Head() {
  return (
    <>
      <DefaultHeader />
      <title>Next@13 예제</title>
      <meta
        name="description"
        content="Nextjs@13을 기반으로 한 리액트 deep dive 예제입니다."
      />
    </>
  )
}
