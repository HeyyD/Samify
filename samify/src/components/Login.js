import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { switchView } from '../reducers/viewReducer';
import './Login.style.scss';

class Login extends Component {

  componentDidMount() {
    this.props.switchView('login');
  }

  render() {
    const { view } = this.props;
    const visible = view === 'login';
    const hideComponent = { display: visible ? '' : 'none' };

    return (
      <div className="login-form" style={hideComponent}>
        <div className="login-background"></div>
        <div className="form-container">
          <form>
            <h1>Welcome to Samify</h1>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <Link className="button-style" to="/">Login</Link>
          </form>
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

export default connect(mapStateToProps, { switchView })( Login );
