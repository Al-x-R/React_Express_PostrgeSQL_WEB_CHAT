import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Login from '../components/Auth/Login';
import Chat from '../components/Chat/Chat';
import Register from '../components/Auth/Register';
import ProtectedRoute from '../components/Route/ProtectedRoute';


export default () => {
  return (
    <Switch>
      <ProtectedRoute exact path='/' component={Chat} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route render={() => <h1>404 page not found</h1>} />
    </Switch>
  )
}