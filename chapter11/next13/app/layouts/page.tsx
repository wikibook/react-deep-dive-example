export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Layouts</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>레이아웃은 특정 주소 내부에 공유할 수 있는 UI 를 말한다.</li>
          <li>
            네비게이션이 발생하더라도 레이아웃은 그 상태를 유지하고, 다시
            렌더링하지 않는다.
          </li>
          <li>레이아웃은 여러 페이지에 걸쳐 중첩하는 것 또한 가능하다.</li>
        </ul>
      </div>
    </div>
  )
}
