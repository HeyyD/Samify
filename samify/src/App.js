import React, { Component } from 'react';
import Login from './components/Login';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainView from './components/MainView';
import ArtistPage from './components/ArtistPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Switch>
            <Route exact path='/' component={ MainView } />
            <Route path='/login' component={ Login }/>
            <Route path='/artist' component={ArtistPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
