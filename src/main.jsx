import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './style/index.scss'
import { Context } from './Components/MyContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Context>
    <App />
</Context>
)
