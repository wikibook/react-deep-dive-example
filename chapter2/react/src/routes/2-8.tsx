import React from 'react'

interface State {
  count: number
}

type Props = Record<string, never>

export class ReactPureComponent extends React.PureComponent<Props, State> {
  private constructor(props: Props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  private handleClick = () => {
    console.log('handleClick!') // eslint-disable-line no-console

    this.setState({ count: 1 })
  }

  private handleChange = () => {
    console.log('handleChanged!') // eslint-disable-line no-console
  }

  public render() {
    return (
      <>
        <h1>
          ReactPureComponent: {this.state.count}{' '}
          <button onClick={this.handleClick}>+</button>
        </h1>
        <span>
          위 빌드 결과가 알고 싶다면, 빌드를 수행한 뒤에 번들링 결과물에서
          console.log 내용을 검색해보면 된다. 코드가 읽기 어렵다면 전체코드를
          <a href="https://beautifier.io/">여기</a> 에서 보기 좋게 포맷팅해보자.
        </span>
      </>
    )
  }
}
