export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Incremental Static Regeneration
      </h1>

      <div className="space-y-4">
        <ul className="list-disc space-y-2 pl-4 text-sm text-gray-300">
          <li>
            이 예제에서는 과거 `getStaticProps`와 `revalidate`의 조합으로
            제공하는 `incremental static regeneration`을 구현한 예제다.
          </li>
          <li>
            이 하위 페이지들은 15초 간격으로 페이지를 재생성하며, 15초 이내에
            방문한 사용자에 대해서는 기존에 캐싱된 페이지를 보여준다.
          </li>
          <li>
            먼저 최초에 페이지를 방문하면 캐싱된 페이지를 보여준다. 그리고 만약
            그 방문 시점이 revalidate시간, 즉 생성후 15초를 지났다면 새로
            페이지를 다시 만들고, 그 이후에 방문한 사용자에게는 재생성한
            페이지를 보여준다.
          </li>
          <li>우측 상단의 마지막으로 렌더링된 시간을 주목해서 살펴보자.</li>
        </ul>
      </div>
    </div>
  )
}
