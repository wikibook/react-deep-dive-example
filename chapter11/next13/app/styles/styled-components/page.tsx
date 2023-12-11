import {
  SkeletonInner,
  SkeletonImg,
  SkeletonBtn,
  SkeletonLineOne,
  SkeletonLineTwo,
  Container,
} from '#components/components'

const Skeleton = () => (
  <SkeletonInner>
    <SkeletonImg />
    <SkeletonBtn />
    <SkeletonLineOne />
    <SkeletonLineTwo />
  </SkeletonInner>
)

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled Components (styled로 만들어진 컴포넌트는 반드시 클라이언트
        컴포넌트 여야 합니다.)
      </h1>
      <Container>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Container>
    </div>
  )
}
