export interface Item {
  name: string
  slug: string
  description: string
}

export const demos: Array<{ name: string; items: Item[] }> = [
  {
    name: 'Layouts',
    items: [
      {
        name: 'Nested Layouts',
        slug: 'layouts',
        description: '중첩 레이아웃 - 주소에 따라 적용할 수 있는 레이아웃',
      },
      {
        name: 'Grouped Layouts',
        slug: 'grouped-layouts',
        description:
          '그룹 레이아웃 - 주소에 영향을 미치지 않고 특정 주소에 따라 그룹화',
      },
    ],
  },
  {
    name: 'File Conventions',
    items: [
      {
        name: 'loading.js',
        slug: 'loading',
        description:
          '데이터를 불러오거나 렌더링하는 동안 표시할 수 있는 로딩 컴포넌트',
      },
      {
        name: 'error.js',
        slug: 'error',
        description: '에러 발생시 렌더링할 수 있는 에러 컴포넌트',
      },
      {
        name: 'head.js',
        slug: 'head',
        description: 'URL에 따라 보여줄 수 있는 head',
      },
    ],
  },
  {
    name: 'Data Fetching',
    items: [
      {
        name: 'Static-Site Generation',
        slug: 'ssg',
        description: '기존 getStaticProps을 nextjs@13에서 구현하는 방법',
      },
      {
        name: 'Server-Side Rendering',
        slug: 'ssr',
        description: '기존 `getServerSideProps`를 nextjs@13에서 구현하는 방법',
      },
      {
        name: 'Incremental Static Regeneration',
        slug: 'isr',
        description: '기존 `getStaticProps`와 revalidate 옵션을 구현하는 방법',
      },
      {
        name: 'Streaming with Suspense',
        slug: 'streaming',
        description: 'React Suspense를 활용한 서버 스트리밍 데이터 불러오기',
      },
    ],
  },
  {
    name: 'Components',
    items: [
      {
        name: 'Client context',
        slug: 'context',
        description:
          '`Context`는 상태를 가지고 있으므로 반드시 클라이언트 컴포넌트여야 한다.',
      },
    ],
  },
  {
    name: 'Styles',
    items: [
      {
        name: 'CSS and CSS-in-JS',
        slug: 'styles',
        description: '스타일을 적용하는 다양한 방법',
      },
    ],
  },
  {
    name: 'Server Action',
    items: [
      {
        name: 'form action',
        slug: 'server-action/form',
        description: '서버액션을 form과 함께 사용해보기',
      },
      {
        name: 'form action with data',
        slug: 'server-action/form/1',
        description: '서버액션을 form과 데이터를 기반으로 사용해보기',
      },
      {
        name: 'form action with useTransition',
        slug: 'server-action/start-transition/1',
        description: '서버액션을 useTransition과 함께 사용해보기',
      },
    ],
  },
]
