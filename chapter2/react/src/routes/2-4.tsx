import React from 'react'

// props 타입을 선언한다.
interface SampleProps {
  required?: boolean
  text: string
}

// state 타입을 선언한다.
interface SampleState {
  count: number
  isLimited?: boolean
}

// Component에 제네릭으로 props, state를 순서대로 넣어준다.
class SampleComponent extends React.Component<SampleProps, SampleState> {
  // constructor에서 props를 넘겨주고, state의 기본값을 설정한다.
  private constructor(props: SampleProps) {
    super(props)
    this.state = {
      count: 0,
      isLimited: false,
    }
  }

  // 렌더 내부에서 쓰일 함수를 선언한다.
  private handleClick = () => {
    const newValue = this.state.count + 1
    this.setState({ count: newValue, isLimited: newValue >= 10 })
  }

  // render에서 이 컴포넌트가 렌더링할 내용을 정의한다.
  public render() {
    // props와 state 값을 this, 즉 해당 클래스에서 꺼낸다.
    const {
      props: { required, text },
      state: { count, isLimited },
    } = this

    return (
      <h2>
        Sample Component
        <div>{required ? '필수' : '필수아님'}</div>
        <div>문자: {text}</div>
        <div>count: {count}</div>
        <button onClick={this.handleClick} disabled={isLimited}>
          증가
        </button>
      </h2>
    )
  }
}

export default SampleComponent
