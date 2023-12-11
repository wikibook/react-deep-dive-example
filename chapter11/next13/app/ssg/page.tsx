export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Static-Site Generation
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            이 예제는 과거 `getStaticProps`와 `getStaticPaths`를 구현한 예제다.
            `getStaticPaths`는 `generateStaticParams`으로 대체되었으며, 데이터를
            불러오는 것은 `fetch`를 사용하는 것으로 동일하다. 최초 빌드시에 미리
            데이터를 불러오고, 이후 재요청이 있으면 계속 해당 데이터를 사용한다.
          </li>
          <li>
            미리 빌드된 페이지를 확인하고 싶다면, `./next/server/app/ssg`로
            이동해서 확인해보면 된다. 미리 빌드된 html 파일이 준비되어 있을
            것이다.
          </li>
        </ul>
      </div>
    </div>
  )
}
