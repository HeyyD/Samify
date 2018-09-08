import React, { Component } from 'react';
import './App.style.scss';
import SongList from './components/SongList';
import { Route, BrowserRouter as Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path='/list' component={SongList} />
        </div>
      </Router>
    );
  }
}

export default App;
