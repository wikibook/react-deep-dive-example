export default async function Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-xl font-medium text-gray-400/80">
          Streaming with Suspense
        </h1>
        <div className="space-y-4">
          <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
            <li>
              스트리밍을 활용하면 서버에서 클라이언트로 UI 컴포넌트를 점진적으로
              조금씩 보내는 것(스트리밍)이 가능해진다.
            </li>
            <li>
              스트리밍을 활용하면 서버사이드렌더링과 다르게, 전체 페이지를 모두
              보여줄 때 까지 기다리게 하는 것이 아니라 필요한 부분 부터 먼저
              렌더링을 마치고 인터랙션할 수 있는 상태로 제공하는 것이
              가능해진다.
            </li>
            <li>
              위 유저 목록 중 하나를 누르면 유저 컴포넌트로 가는데, 이
              컴포넌트는 각각 유저목록과 유저의 작성 글을 서로다른 Suspense
              내부에서 불러온다. 이를 활용하면 `loading` 컴포넌트를 사용했을 때
              보다 더 세밀하게 로딩을 보여줄 수 있다.
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5].map((id) => (
          <div key={id} className="col-span-4 lg:col-span-1" />
        ))}
      </div>
    </div>
  )
}
