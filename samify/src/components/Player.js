import React, { Component } from 'react';
import './Player.style.scss';
import IconButton from './IconButton';

class Player extends Component {
  render() {
    return(
      <div className="player-wrapper">
        <IconButton icon="fa fa-step-backward"/>
        <IconButton icon="fa fa-play-circle-o"/>
        <IconButton icon="fa fa-step-forward"/>
      </div>
    );
  }
}

export default Player;
