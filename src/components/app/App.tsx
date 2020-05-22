import React, { Component, ReactNode } from 'react'
import withBoundedMethods from '../../decorators/withBoundedMethods'

@withBoundedMethods
class App extends Component<Props, State> {
  state: State = { timer: null, counter: 0 }

  advance(): void {
    this.setState({ counter: this.state.counter + 1 })
  }

  start(): void {
    if (!this.state.timer) this.setState({ timer: window.setInterval(this.advance, 1000) })
  }

  stop(): void {
    if (this.state.timer) {
      clearInterval(this.state.timer)
      this.setState({ timer: null })
    }
  }

  reset(): void {
    this.setState({ counter: 0 })
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
        <div>
          <h1>{this.state.counter}</h1>
        </div>
      </div>
    )
  }
}

export default App

export interface Props {}

interface State {
  timer: number | null
  counter: number
}
