import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.css';
import LoginRouter from './routers/LoginRouter'
import HomeRouter from './routers/HomeRouter'
import HubRouter from './routers/HubRouter'
import HubsRouter from './routers/HubsRouter'
import QCPortalRouter from './routers/QCPortalRouter'
import UserAccessRouter from './routers/UserAccessRouter'
import ActionsRouter from './routers/ActionsRouter'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={HomeRouter} />
          <Route path='/login' component={LoginRouter} />
          <Route path='/actions' component={ActionsRouter} />
          <Route path='/hub/:id' component={HubRouter} />
          <Route path='/hubs' component={HubsRouter} />
          <Route path='/user-access' component={UserAccessRouter} />
          <Route path='/qc-portal/:id' component={QCPortalRouter} />
        </Switch>
      </Router>
    );
  }
}

export default App;
