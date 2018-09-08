import React, { Component } from 'react';
import './Login.style.scss';

class Login extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Username"></input>
          <input type="password" placeholder="Password"></input>
          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
