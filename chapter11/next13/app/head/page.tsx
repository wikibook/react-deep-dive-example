export default function Page() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-medium text-gray-400/80">
        head 태그 설정하기
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            `head`를 활용하면 라우트 내부의 {'<head>'}를 원하는 대로 커스텀할 수
            있다.
          </li>
          <li>
            또한 `head`내부에서 데이터를 불러와서 동적으로 결정하는 것 또한
            가능하다.
          </li>
          <li>
            Next will dedupe requests for the same data across `layout.js`,
            `page.js` and `head.js` when rendering a route.
          </li>
          <li>
            nextjs는 `head` 내부에 데이터 요청이 있다면 이 요청이 완료되고{' '}
            {'<head>'}가 렌더링이 완료될 때 까지 기다린다. 이는 첫번째 스트리밍
            응답에 무조건 {'<head>'}가 포함될 수 있도록 보장해준다.
          </li>
          <li>
            추가로 같은 라우트 내부에서 발생하는 같은 중복 api 요청에 대한
            처리도 잘되어 있는 것을 확인할 수 있다. 이는 프로덕션 모드에서만
            확인가능하며, {'/head/{id}'}페이지에서 같은 api를 3차례 부르지만
            한번만 요청이 가는 것을 확인할 수 있다.
          </li>
          <li>
            클라이언트에서의 중복처리도 원래 가능한 것으로 알려져 있지만, 현재
            클라이언트 요청에 대한 중복처리는 아직 개발중인 것으로 보인다.
            (2023년 1월 기준)
            <a
              className="inline-flex gap-x-2 rounded-lg bg-gray-700 px-3 py-1 text-sm font-medium text-gray-100 hover:bg-gray-500 hover:text-white"
              href="https://github.com/vercel/next.js/discussions/41745#discussioncomment-3986980"
            >
              관련 링크 보기
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
