# Demo of Gradual React Upgrades

https://github.com/reactjs/react-gradual-upgrade-demo 프로젝트의 일부 불필요한 내용을 제거하고 간단하게 변경한 프로젝트입니다.

## 프로젝트 구조

### modern

react@17.x 로 구성된 프로젝트이며, gradual demo를 실행하는 기본 리액트 프로젝트 입니다.

### legacy

react@16.x로 구성된 프로젝트이며, modern에서 import 하여 사용되는 프로젝트 입니다.

### shared

`modern`, `legacy` 두 개의 프로젝트에서 모두 사용되는 파일로 구성되어 있으며, 훅과 Context를 제공합니다. 훅과 context 가 `modern`과 `legacy` 모두에서 사용될 수 있음을 보여주기 위해 만들어진 예제 파일입니다.

## 동작 방식

1. 프로젝트를 빌드 합니다.
2. 빌드와 동시에 `shared`에 있는 내용을 각각 `modern`과 `legacy`로 복사합니다. 이는 마치 `npm`에서 업로드된 라이브러리를 사용하는 것과 비슷한 구조로 동작합니다.
3. 프로젝트를 시작합니다.