import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './bootstrap.min.css'
import App from './App'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'

axios.defaults.baseURL = 'localhost:5000'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
