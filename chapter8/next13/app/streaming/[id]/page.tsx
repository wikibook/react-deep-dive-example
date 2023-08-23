import { Suspense } from 'react'

import { PostByUserId, Users } from './components'

export default async function Page({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <Suspense fallback={<div>유저 목록을 로딩중입니다.</div>}>
        {/* 타입스크립트에서 Promise 컴포넌트에 대해 에러를 내기 때문에 임시 처리 */}
        {/* @ts-expect-error Async Server Component */}
        <Users />
      </Suspense>

      <Suspense
        fallback={<div>유저 {params.id}의 작성 글을 로딩중입니다.</div>}
      >
        {/* @ts-expect-error Async Server Component */}
        <PostByUserId userId={params.id} />
      </Suspense>
    </div>
  )
}
