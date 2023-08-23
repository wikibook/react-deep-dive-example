export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Route Groups</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            라우팅 그룹은 URL 구조에 영향을 주지 않으면서, 주소에 따라 서로다른
            레이아웃을 적용할 수 있는 방법이다.
          </li>
          <li>
            만약 대표 루트 URL 페이지가 선언되어 있지 않다면 `(main)`을 해당
            페이지의 루트로 간주하여 라우팅한다.
          </li>
          <li>
            서로 다른 탭을 네비게이션 해보면, 주소에는 영향이 없지만 주소에
            따라서 서로 다른 레이아웃을 적용할 수 있다는 것을 알 수 있다.
          </li>
        </ul>
      </div>
    </div>
  )
}
