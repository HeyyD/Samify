import React, { Component } from 'react';
import './App.style.scss';
import SongList from './components/SongList';

class App extends Component {
  render() {
    return (
      <div>
        <SongList />
      </div>
    );
  }
}

export default App;
