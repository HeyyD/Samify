import React, { Component } from 'react';
import Login from './components/Login';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import MainView from './components/MainView';
import ArtistPage from './components/ArtistPage';
import SongList from './components/SongList';
import TestComponent from './components/TestComponent';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <MainView>
            <Route path='/artist' component={ ArtistPage } />
            <Route path="/list" component={ SongList }/>
            <Route path="/test" component={ TestComponent }/>
          </MainView>
          <Switch>
            <Route path='/login' component={ Login }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
