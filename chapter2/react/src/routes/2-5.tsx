import { Component } from 'react'

type Props = Record<string, never>

interface State {
  count: number
}

class SampleComponent extends Component<Props, State> {
  private constructor(props: Props) {
    super(props)
    this.state = {
      count: 1,
    }
    // handleClick의 this를 현재 클래스로 바인딩 시킨다.
    this.handleClick = this.handleClick.bind(this)
  }

  private handleClick() {
    this.setState((prev) => ({ count: prev.count + 1 }))
  }

  public render() {
    const {
      state: { count },
    } = this
    return (
      <div>
        <button onClick={this.handleClick}>증가</button>
        {count}
      </div>
    )
  }
}

export default SampleComponent
