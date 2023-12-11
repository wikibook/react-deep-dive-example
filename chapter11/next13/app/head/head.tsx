import DefaultHeader from '#components/DefaultHeader'

export default function Head() {
  return (
    <>
      <DefaultHeader />
      <title>라우트 내부에서 head를 재정의할 수 있습니다.</title>
      <meta name="description" content="head를 재정의해보았습니다." />
    </>
  )
}
