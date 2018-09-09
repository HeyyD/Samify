import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import SongList from './SongList';
import Toolbar from './Toolbar';
import './MainView.style.scss';
import TestComponent from './TestComponent';
import Player from './Player';

class MainView extends Component {

  render() {
    return (
      <div className="main-view-wrapper">
        <div className="upper-content-container">
          <div className="toolbar-wrapper">
            <Toolbar/>
          </div>
          <div className="content-wrapper">
            <Switch>
              <Route path="/list" component={ SongList }/>
              <Route path="/test" component={ TestComponent }/>
            </Switch>
          </div>
        </div>
        <div className="player-container">
          <Player/>
        </div>
      </div>
    );
  }
}

export default MainView;
