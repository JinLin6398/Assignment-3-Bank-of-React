/*==================================================
src/components/UserProfile.js

The UserProfile component is used to demonstrate the use of Route and Link.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class UserProfile extends Component {
  render() {
    return (
      <div style={userMainStyle}>
        <h1>User Profile</h1>

        <div>Username: {this.props.userName}</div>
        <div>Member Since: {this.props.memberSince}</div>
        <br/>
        <div style={returnLinkBackgroundStyle}>
          <Link to="/" style={returnLinkStyle}>Return to Home</Link>
        </div>
      </div>
    );
  }
}

const returnLinkBackgroundStyle = {
  backgroundColor: '#4189bf',
  borderRadius: '5px',
  marginLeft: '45%',
  marginRight: '45%',
  padding: '5px'
}

const returnLinkStyle = {
  textDecoration: 'none', 
  color: 'white',
  fontSize: '15px',
  cursor: 'pointer',
  marginTop: '12px',
  marginBottom: '12px',
}

const userMainStyle = {
  height: '100vb',
  width:  '100vi',
  backgroundColor: 'rgb(213, 235, 255)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}

export default UserProfile;