import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Username"></input>
        <input type="password" placeholder="Password"></input>
        <button>Login</button>
      </form>
    );
  }
}

export default Login;
