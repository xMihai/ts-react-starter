import React, { Component } from 'react'
import { connect } from 'react-redux'
import { start, stop, reset } from '../../store/actions'

class App extends Component<Props> {
  render() {
    return (
      <div>
        <button onClick={this.props.start}>Start</button>
        <button onClick={this.props.stop}>Stop</button>
        <button onClick={this.props.reset}>Reset</button>
        <div>
          <h1>{this.props.counter}</h1>
        </div>
      </div>
    )
  }
}

export interface Props {
  counter: number
  start: () => any
  stop: () => any
  reset: () => any
}

const withRedux = connect(({ counter }: { counter: number }) => ({ counter }), { start, stop, reset })

export default withRedux(App)
