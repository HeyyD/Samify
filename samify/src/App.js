import React, { Component } from 'react';
import SongList from './components/SongList';
import Login from './components/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="page-container">
          <Route path='/list' component={SongList} />
          <Route path='/login' component = { Login } />
        </div>
      </Router>
    );
  }
}

export default App;
