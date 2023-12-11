export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Server action (alpha)
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            서버 액션은 컴포넌트에서 직접 서버사이드 데이터 조작을 할 수 있게
            해주는 nextjs의 새로운 기능이다.
          </li>
          <li>
            13.4.0 기준으로 실험 기능이므로, `next.config.js`에서
            `experimental.serverActions = true`로 설정해두어야 한다.
          </li>
          <li>서버 액션에서 할 수 있는 것들을 서브 메뉴로 확인해보자.</li>
        </ul>
      </div>
    </div>
  )
}
