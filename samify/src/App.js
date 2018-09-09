import React, { Component } from 'react';
import Login from './components/Login';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainView from './components/MainView';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Switch>
            <Route path='/login' component={ Login }/>
            <Route path='/' component={ MainView } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
