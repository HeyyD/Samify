import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.style.scss';

class Login extends Component {

  render() {
    return (
      <div className="login-form">
        <div className="login-background"></div>
        <div className="form-container">
          <form>
            <h1>Welcome to Samify</h1>
            <input type="text" placeholder="Username"></input>
            <input type="password" placeholder="Password"></input>
            <Link to="/list">Login</Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
