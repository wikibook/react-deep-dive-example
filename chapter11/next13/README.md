# Chapter8 react@18 nextjs@13 예제

https://react-deep-dive-example-six.vercel.app/

https://github.com/vercel/app-playground 저장소에서 제공하는 예제를 조금 더 간결하고 이해하기 쉽도록 재구성한 저장소입니다. 스타일과 예제 내역을 참고했으며, 구체적인 예제는 코드 설명을 위해 조금씩 수정을 가미했습니다. 원본 예제를 알고 싶다면 vercel의 원래 저장소를 참고해주세요.

## warning

- 스타일이 대부분 [tailwindcss](https://tailwindcss.com/)를 기반으로 작성되어 있기 때문에 `className`이 조금 지저분 할 수 있습니다. `className`은 대부분 스타일을 위해 사용되고 있으니 굳이 `className`을 이해하실 필요는 없습니다.
- 2023년 5월 기준 `typescript@5.1.0-beta` 와 `styled-components@6.0.0-rc.1`가 일부 리액트 서버 컴포넌트 관련한 코드를 지원하기 시작하여 release candidate 버전임에도 설치했습니다.
- `typescript@5.1.0-beta` 설치로 인해 아래와 같이 `peerDependencies`의 버전을 제대로 추론하지 못하는 문제를 해결하기 위해 `.npmrc`에 `legacy-peer-deps=true` 옵션을 추가했습니다. 이 문제는 향후에 `typescript@5.1.0`이 정식으로 출시되면 해결 될 것입니다.

  ```text
  npm ERR! Could not resolve dependency:
  npm ERR! peerOptional typescript@">=3.3.1" from eslint-config-next@13.4.1
  npm ERR! node_modules/eslint-config-next
  npm ERR!   dev eslint-config-next@"^13.4.0" from the root project
  npm ERR!
  npm ERR! Conflicting peer dependency: typescript@5.0.4
  npm ERR! node_modules/typescript
  npm ERR!   peerOptional typescript@">=3.3.1" from eslint-config-next@13.4.1
  npm ERR!   node_modules/eslint-config-next
  npm ERR!     dev eslint-config-next@"^13.4.0" from the root project
  ```
