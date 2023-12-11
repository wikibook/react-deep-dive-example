import ErrorButton from '#components/ErrorButton'

export default function Page() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between gap-x-3">
        <h1 className="text-xl font-medium text-gray-400/80">Error Handling</h1>

        <ErrorButton />
      </div>

      <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
        <li>
          `error`는 nextjs의 또 다른 예약어로, 해당 라우트 내부에서 사용가능한
          에러 바운더리를 정의할 수 있는 파일이다.
        </li>
        <li>
          에러 버튼을 눌러보자. 해당 라우트 내부의 레이아웃과 페이지에만 영향을
          미치며, 여전히 다른 페이지는 상호작용이 가능하다.
        </li>
        <li>
          `not-found`파일을 활용하면 해당 라우트 내부의 404 페이지를 정의할 수
          있다.
        </li>
        <li>
          유저 버튼을 누르면 /error/{'{id}'}로 이동하는데 이 페이지는
          `notFound()`를 실행하여 404페이지로 보낸다.
        </li>
        <li>주의: `error`는 반드시 클라이언트 컴포넌트여야 한다.</li>
      </ul>
    </div>
  )
}
