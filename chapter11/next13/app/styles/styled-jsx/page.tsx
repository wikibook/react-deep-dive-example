'use client'

import { SkeletonCard } from './components'

export default function Page() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-medium text-gray-400/80">
        Styled JSX ({'<style jsx>'}문법을 사용하기 위해서는 반드시 클라이언트
        컴포넌트여야 합니다.)
      </h1>
      <div className="container">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
      {/* eslint-disable-next-line react/no-unknown-property */}
      <style jsx>
        {`
          .container {
            display: grid;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.5rem /* 24px */;
          }

          @media (min-width: 1024px) {
            .container {
              grid-template-columns: repeat(3, minmax(0, 1fr));
            }
          }
        `}
      </style>
    </div>
  )
}
