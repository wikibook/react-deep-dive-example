export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">Client Context</h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            Context는 클라이언트 컴포넌트로, 기존에 리액트에서 사용하던 Context
            문법을 그대로 사용하면 서버와 클라이언트 컴포넌트 모두에서 사용할 수
            있다.
          </li>
          <li>
            Context는 상태를 가지고 있어야 하므로 클라이언트 컴포넌트가 될 수
            밖에 없으며, 반드시 파일 상단에 "use client"를 선언해주어야 한다.
          </li>
          <li>
            Context.Provider로 하위 라우팅을 감싸주면, 라우팅 내부에서 이동이
            발생하더라도 Context 내부의 값잉 유지되는 것을 볼 수 있다.
          </li>
        </ul>
      </div>
    </div>
  )
}
