import React, { Component } from 'react';
import './IconButton.style.scss';

class IconButton extends Component {

  constructor() {
    super();
  }

  render() {
    return(
      <button className="icon-button" onClick={this.props.onClick}>
        <i className={this.props.icon}></i>
      </button>
    );
  }
}
export default IconButton;
