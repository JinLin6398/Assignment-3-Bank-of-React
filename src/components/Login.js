/*==================================================
src/components/Login.js

The LogIn component is used to demonstrate the use of Redirect.
Note: You don't need to work on this file for the Assignment.
==================================================*/
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';

class LogIn extends Component {
  constructor (props) {  // Create and initialize state
    super(props)
    this.state = {
      user: {
        //userName: '',
        userName: this.props.user.userName,  // Initialize userName using props input (currentUser in App.js)
        password: ''
      },
      redirect: false  // Redirect property used to trigger Redirect
    }
  }

  // When User Name input is changed, capture the new input value and update state
  handleChange = (e) => {
    const updatedUser = {...this.state.user};  // Create an object for state
    updatedUser.userName = e.target.value;  // Set object's userName to the new input value
    this.setState({user: updatedUser})  // Update state with object values
  }

  // When user clicked "Log In" button, store user data and then redirect to "User Profile" page
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.mockLogIn(this.state.user)  // Update state in the top-level component (App.js)
    this.setState({redirect: true})  // Update state to trigger Redirect
  }
  
  render () {
    // Redirect to "User Profile" page when "Log In" button is clicked
    if (this.state.redirect) {  
      return (<Redirect to="/userProfile"/>);
    }

    // Render the login form (and call "handleSubmit" method when "Log In" button is clicked to submit form)
    return (
      <div style={loginMainStyle}>
        <div style={loginBoxStyle}>
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit}>
            <div style={sectionStyle}>
              <label style={labelStyle}>User Name</label>
              <input type="text" name="userName" defaultValue={this.props.user.userName} onChange={this.handleChange}/>
            </div>
            <div style={sectionStyle}>
              <label style={labelStyle}>Password</label>
              <input type="password" name="password" />
            </div>
            <button style={loginButtonStyle}>Login</button>
          </form>  
          <br/>
          <Link to="/" style={returnButtonStyle}><strong>Return to Home</strong></Link>
        </div>
      </div>
    );
  }
}

const sectionStyle = {
  marginBottom: '10px'
}

const loginButtonStyle = {
  textDecoration: 'none', 
  backgroundColor: 'white',
  color: '#4189bf',
  width: '80px',
  height: '30px',
  border: 'none',
  cursor: 'pointer',
  fontSize: '25px'
}

const labelStyle = {
  fontWeight: 'bold', 
  marginRight: '10px', 
  width: '120px', 
  whiteSpace: 'nowrap'
}

const returnButtonStyle = {
  textDecoration: 'none', 
  padding: '10px 20px',
  marginLeft: '42px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4189bf',
  color: 'white',
  cursor: 'pointer',
  maxWidth: '300px'
};

const loginBoxStyle = {
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

const loginMainStyle = {
  height: '100vb',
  width:  '100vi',
  backgroundColor: 'rgb(213, 235, 255)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '2px',
  fontFamily: 'Ariel, sans-serif'
}

export default LogIn;