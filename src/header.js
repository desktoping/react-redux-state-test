import React, { Component } from 'react'
import logo from './logo.svg';
import { connect } from 'react-redux'

class Header extends Component {
  render() {
    const { header: headerMsg } = this.props
    console.log('rendering header')
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {headerMsg}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    )
  }
}

// Avoid
// export default connect(state => state)(Header)

export default connect(({ header }) => ({ header }))(Header)