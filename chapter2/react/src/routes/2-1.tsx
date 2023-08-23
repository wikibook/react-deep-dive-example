import { ReactNode } from 'react'

function A({
  children,
  required,
}: {
  required?: boolean
  children?: ReactNode
}) {
  return (
    <>
      <input type="text" required={required} />
      <div>{children}</div>
    </>
  )
}

function B({
  text,
  optionalChildren,
}: {
  text?: string
  optionalChildren?: ReactNode
}) {
  return (
    <>
      <h1>{text}</h1>
      {optionalChildren}
    </>
  )
}

// 하나의 요소로 구성된 가장 단순한 형태
const ComponentA = <A>안녕하세요.</A>

// 자식이 없이 SelfClosingTag로 닫혀있는 형태도 가능하다.
const ComponentB = <A />

// 옵션을 { } 와 전개 연산자로 넣을 수 있다.
const ComponentC = <A {...{ required: true }} />

// 옵션명만 넣어도 가능하다.
const ComponentD = <A required />

// 옵션명과 속성을 넣을 수 있다.
const ComponentE = <A required={false} />

const ComponentF = (
  <A>
    {/* 문자열은 쌍따옴표및 홀따옴표 모두 가능하다. */}
    <B text="리액트" />
  </A>
)

const ComponentG = (
  <A>
    {/* 옵선의 값으로 JSXElement를 넣는 것 또한 올바른 문법이다. */}
    <B optionalChildren={<>안녕하세요.</>} />
  </A>
)

const ComponentH = (
  <A>
    {/* 여러개의 자식도 포함할 수 있다. */}
    안녕하세요
    <B text="리액트" />
  </A>
)

export function Component1() {
  return (
    <>
      <div>{ComponentA}</div>
      <div>{ComponentB}</div>
      <div>{ComponentC}</div>
      <div>{ComponentD}</div>
      <div>{ComponentE}</div>
      <div>{ComponentF}</div>
      <div>{ComponentG}</div>
      <div>{ComponentH}</div>
    </>
  )
}
