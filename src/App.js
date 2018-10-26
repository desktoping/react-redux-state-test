import React, { Component } from 'react'
import { connect } from 'react-redux'

import './App.css'
import Header from './header'

class App extends Component {
  render() {
    const { num, dispatch } = this.props
    console.log(this.props)
    return (
      <div className="App">
        <Header />
        <div>{num}</div>
        <button onClick={() => dispatch({ type: 'add' })}>Increase</button>
      </div>
    )
  }
}

export default connect(
  ({ num }) => ({ num })
)(App)
