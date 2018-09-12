import React, { Component } from 'react';
import { Switch } from 'react-router-dom';
import Toolbar from './Toolbar';
import Player from './Player';
import { connect } from 'react-redux';
import { switchView } from '../reducers/viewReducer';
import './MainView.style.scss';

class MainView extends Component {

  componentDidMount() {
    this.props.switchView('main');
  }

  render() {
    const { view } = this.props;
    const visible = view === 'login';
    const hideComponent = { display: visible ? 'none' : '' };

    return (
      <div className="main-view-wrapper" style={hideComponent}>
        <div className="upper-content-container">
          <div className="toolbar-wrapper">
            <Toolbar/>
          </div>
          <div className="content-wrapper">
            <Switch>
              {this.props.children}
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
const mapStateToProps = (state) => {
  return {
    view: state.view
  };
};
export default connect(mapStateToProps, { switchView })( MainView );
