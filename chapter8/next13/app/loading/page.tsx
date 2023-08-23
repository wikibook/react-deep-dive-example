export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Loading</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            파일명 loading은 nextjs에서 사용하는 예약어로, 페이지가 아직 렌더링
            준비가 되지 않았을 때 노출되는 컴포넌트다.
          </li>
          <li>
            Streaming 예제의 Suspense와 다르게, 별도로 Suspense로 감싸지 않아도
            하위 라우팅 내부에서 공통으로 사용할 수 있다는 장점이 있다.
          </li>
          <li>
            유저를 클릭하면, 유저에 해당하는 컴포넌트가 렌더링 되기 전까지
            loading.tsx가 잠깐 노출되는 것을 확인할 수 있다.
          </li>
        </ul>
      </div>
    </div>
  )
}
