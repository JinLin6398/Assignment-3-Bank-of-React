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
          <h1 style={{color: 'white', flex: '1'}}>Bank of React</h1>
        </div>
        <div style={linkBackgroundStyle}>
            <Link to="/userProfile" style={linkStyle}><strong>User Profile</strong></Link>
        </div>
        <br/>
        <div style={linkBackgroundStyle}>
            <Link to="/login" style={linkStyle}><strong>Login</strong></Link>
        </div>
        <br/>
        <div style={linkBackgroundStyle}>
            <Link to="/credits" style={linkStyle}><strong>Credits</strong></Link>
        </div>
        <br/>
        <div style={linkBackgroundStyle}>
            <Link to="/debits" style={linkStyle}><strong>Debits</strong></Link>
        </div>
        <br/><br/>
        <AccountBalance accountBalance={this.props.accountBalance}/>
      </div>
    );
  }
}

const linkStyle = {
  flex: '1',
  textDecoration: 'none', 
  color: 'white',
  fontSize: '15px',
  cursor: 'pointer',
  // marginTop: '12px',
  // marginBottom: '12px',
  padding: '2px 15px 2px 15px'
}

const linkBackgroundStyle = {
  display: 'flex',
  flex: '1',
  backgroundColor: '#4189bf',
  borderRadius: '5px',
  width: '100px',
  height: '15px',
  justifyContent: 'center',
  padding: '5px'
}

const titleStyle = {
  display: 'flex',
  borderRadius: '10px',
  backgroundColor: 'rgb(11,29,63)',
  width: '220px',
  height: '60px',
  flex: '1',
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
  // backgroundImage: 'url("../../Assignment-3-Bank-of-React/public/images/lighthousePic.jpg")',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  color: 'rgb(10, 26, 41)',
  marginTop: '70px',
  padding: '15px',
  border: '1px solid #ddd',
  backgroundColor: 'rgb(213, 235, 255)'
};

export default Home;