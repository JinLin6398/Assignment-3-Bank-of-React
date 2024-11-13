/*==================================================
src/components/Home.js

The Home component is used to demonstrate the use of Link.
==================================================*/
import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div style={mainHomeStyle}>
        <img src="https://picsum.photos/200/200" alt="bank" style={imageStyle}/>
        <div style={titleStyle}>
          <h1 style={{color: 'white'}}>Bank of React</h1>
        </div>
          <div style={linkBackgroundStyle}>
            <Link to="/userProfile" style={linkStyle}>User Profile</Link>
          </div>
        <br/>
          <div style={linkBackgroundStyle}>
            <Link to="/login" style={linkStyle}>Login</Link>
          </div>
        <br/>
          <div style={linkBackgroundStyle}>
            <Link to="/credits" style={linkStyle}>Credits</Link>
          </div>
        <br/>
          <div style={linkBackgroundStyle}>
            <Link to="/debits" style={linkStyle}>Debits</Link>
          </div>
        <br/><br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

const linkStyle = {
  textDecoration: 'none', 
  color: 'white',
  fontSize: '15px',
  cursor: 'pointer',
  marginTop: '12px',
  marginBottom: '12px',
}

const linkBackgroundStyle = {
  backgroundColor: '#4189bf',
  borderRadius: '5px',
  marginLeft: '45%',
  marginRight: '45%',
  padding: '5px'
}

const titleStyle = {
  borderRadius: '10px',
  backgroundColor: 'rgb(11,29,63)',
  marginLeft: '42%',
  marginRight: '42%',
  marginTop: '20px',
  marginBottom: '20px',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

const imageStyle = {
  maxWidth: '200%',
  maxHeight: '200%',
  marginLeft: 'auto',
  marginRight: 'auto',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
  borderRadius: '10px'
};

const mainHomeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  color: 'rgb(10, 26, 41)',
  marginTop: '70px',
  padding: '15px',
  border: '1px solid #ddd',
  backgroundColor: 'rgb(213, 235, 255)'
};

export default Home;