import React from 'react'
import { Route, Switch } from 'react-router-dom'
// We will create these two pages in a moment
import ProfilePage from './pages/ProfilePage'
import UserPage from './pages/UserPage'

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={ProfilePage} />
      <Route path="/:id" component={UserPage} />
    </Switch>
  )
}