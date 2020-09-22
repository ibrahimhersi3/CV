import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

render(
  <BrowserRouter basename={window.location.pathname || ''}>
    <Route exact path="/" component={Index} />
    
  </BrowserRouter>,
  document.querySelector('#root')
)