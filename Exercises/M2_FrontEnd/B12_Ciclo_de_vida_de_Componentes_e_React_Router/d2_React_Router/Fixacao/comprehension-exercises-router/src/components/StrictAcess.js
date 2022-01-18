import React, { Component } from 'react'
import { Redirect } from 'react-router';

export default class StrictAcess extends Component {
  checkUser(username, password) {
    if (this.props.user) {
      if (this.props.user.username === 'joao' && this.props.user.password === '1234') return true;
    }
    return false;
  }
  render() {
    const loggedIn = this.checkUser();
    
    if (!loggedIn) {
      // alert('Access Denied');
      return <Redirect to="/" />
    }
    
    return (
      <div>
      <p>Welcome, joao!</p>
      </div>
    )
  }
}
