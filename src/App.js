import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './routers/home/Home'
import Hub from './routers/hub/Hub'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/qc-portal' component={Home} />
          <Route path='/hub/:id' component={Hub} />
          <Route path='/hubs' component={Home} />
          <Route path='/user-access' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
