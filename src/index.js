import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const reducer = (state = { num: 0, header: 'My Header' }, action) => {
  switch (action.type) {
    case 'add':
      const { num } = state
      return {
        ...state,
        num: num + 1
      }
    default:
      return state
  }
}
const store = createStore(reducer)
ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()