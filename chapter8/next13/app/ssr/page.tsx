export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Static-Site Generation
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            서버사이드 렌더링을 수행하면, HTML 페이지를 매 요청이 있을 때 마다
            새로 만들게 된다. 서버에서는 HTML과 요청의 결과에 따른 JSON 데이터와
            함께 클라이언트에 필요한 자바스크립트 파일이 전송된다.
          </li>
          <li>
            `./next/server/app/ssr`를 확인해보면, `/ssg` 페이지와는 다르게 미리
            빌드된 결과물 없이 항상 데이터를 `fetch`할 준비만 되어 있는 것을 볼
            수 있다.
          </li>
          <li>
            클라이언트에서는 이벤트 핸들러 등이 추가되지 않은 정적인 HTML을
            받아서 페이지를 미리 보여주고, 리액트는 이 정적인 페이지에 JSON
            데이터와 자바스크립트를 받아 컴포넌트를 상호작용 가능한 페이지로
            만들어 준다. 이러한 일련의 과정을 hydration 이라고 한다.
          </li>
        </ul>
      </div>
    </div>
  )
}
