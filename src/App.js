/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Lifecycle method to fetch debitList data when the component mounts
  componentDidMount() {
    // Fetch Credits
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ creditList: data });
      
      // Calculate total credits and add to account balance
      const totalCredits = data.reduce((acc, credit) => acc + credit.amount, 0);
      this.setState(prevState => ({
        accountBalance: parseFloat((prevState.accountBalance + totalCredits).toFixed(2))
      }));
    })
    .catch(error => console.error('Error fetching credits:', error));


    // Fetch Debits
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => {
        this.setState({ debitList: data });
        // Optionally, update account balance based on debits
        const totalDebits = data.reduce((acc, debit) => acc + debit.amount, 0);
        this.setState(prevState => ({
          accountBalance: parseFloat((prevState.accountBalance - totalDebits).toFixed(2))
        }));
      })
      .catch(error => console.error('Error fetching debits:', error));
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Update the account balance - used for Credits
  addCredit = (newCredit) => {
    this.setState(prevState => ({
      creditList: [...prevState.creditList, newCredit],
      accountBalance: parseFloat((prevState.accountBalance + newCredit.amount).toFixed(2))
    }));
  }


  // Function to add a new debit transaction
  addDebit = (newDebit) => {
    this.setState(prevState => ({
      debitList: [...prevState.debitList, newDebit],
      accountBalance: parseFloat((prevState.accountBalance - newDebit.amount).toFixed(2))
    }));
  }

  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (
      <Credits credits={this.state.creditList}
               addCredit={this.addCredit} 
               accountBalance={this.state.accountBalance} // Helps pass accountBalance as a prop (in credits)
      />
    )
    const DebitsComponent = () => (
      <Debits 
        debits={this.state.debitList} 
        addDebit={this.addDebit} // Pass addDebit function as a prop
        accountBalance={this.state.accountBalance} // Helps pass accountBalance as a prop (in debits)
      />
    );

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/Assignment-3-Bank-of-React">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  }
}

export default App;