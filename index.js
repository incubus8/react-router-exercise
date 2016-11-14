import React from 'react'
import { render } from 'react-dom'
import App from './App'
import Welcome from './Welcome'
import { Router, Route, hashHistory } from 'react-router'

render((
  <Router>
    <Route path="/" component={App}/>
    <Route path="/welcome" component={Welcome}/>
  </Router>
), document.getElementById('app'))

