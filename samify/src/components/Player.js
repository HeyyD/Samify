import React, { Component } from 'react';
import './Player.style.scss';

class Player extends Component {
  render() {
    return(
      <div className="player-wrapper">
        <i className="fa fa-step-backward"></i>
        <i className="fa fa-play-circle-o"></i>
        <i className="fa fa-step-forward"></i>
      </div>
    );
  }
}

export default Player;
