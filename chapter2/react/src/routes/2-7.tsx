import React from 'react'

interface State {
  count: number
}

type Props = Record<string, never>

export class ReactComponent extends React.Component<Props, State> {
  private renderCounter = 0

  private constructor(props: Props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  private handleClick = () => {
    this.setState({ count: 1 })
  }

  public render() {
    console.log('ReactComponent', ++this.renderCounter) // eslint-disable-line no-console
    return (
      <h1>
        ReactComponent: {this.state.count}{' '}
        <button onClick={this.handleClick}>+</button>
      </h1>
    )
  }
}

export class ReactPureComponent extends React.PureComponent<Props, State> {
  private renderCounter = 0

  private constructor(props: Props) {
    super(props)
    this.state = {
      count: 1,
    }
  }

  private handleClick = () => {
    this.setState({ count: 1 })
  }

  public render() {
    console.log('ReactPureComponent', ++this.renderCounter) // eslint-disable-line no-console
    return (
      <h1>
        ReactPureComponent: {this.state.count}{' '}
        <button onClick={this.handleClick}>+</button>
      </h1>
    )
  }
}

export default function CompareComponent() {
  return (
    <>
      <h2>React.Component</h2>
      <ReactComponent />
      <h2>React.PureComponent</h2>
      <ReactPureComponent />
    </>
  )
}
