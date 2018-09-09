import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Toolbar.style.scss';

class MainView extends Component {

  render() {
    return (
      <div className="toolbar-container">
        <Link to="/list">Playlists</Link>
        <Link to="/test">Test Component</Link>
      </div>
    );
  }
}

export default MainView;