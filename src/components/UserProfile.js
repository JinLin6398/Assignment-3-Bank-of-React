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
        <div style={userBoxStyle}>
          <h1><strong>User Profile</strong></h1>
          <div><strong>Username: </strong><br/>{this.props.userName}</div>
          <div><strong>Member Since: </strong><br/>{this.props.memberSince}</div>
          <br/>
        </div>
        <div style={returnLinkBackgroundStyle}>
            <Link to="/" style={returnLinkStyle}><strong>Return to Home</strong></Link>
        </div>
      </div>
    );
  }
}

const returnLinkBackgroundStyle = {
  backgroundColor: '#4189bf',
  borderRadius: '5px',
  width: '100px',
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

const userBoxStyle = {
  backgroundColor: 'white',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  padding: '20px',
  width: '240px',
  marginBottom: '20px'
}

const userMainStyle = {
  height: '100vb',
  width:  '100vi',
  backgroundColor: 'rgb(213, 235, 255)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '2px'
}

export default UserProfile;