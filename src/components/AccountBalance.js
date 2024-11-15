/*==================================================
src/components/AccountBalance.js

The AccountBalance component displays account balance. It is included in other page views.
==================================================*/
import React, {Component} from 'react';

class AccountBalance extends Component {
  // Display account balance
  render() {
    return (
      <div style={balanceShowStyle}>
        <strong>Balance:</strong> {this.props.accountBalance}
      </div>
    );
  }
}

const balanceShowStyle = {
  display: 'flex',
  flexDirection: 'column',
  color: 'white',
  padding: '15px 40px 15px 40px',
  borderRadius: '7px',
  marginLeft: '43%',
  marginRight: '43%',
  backgroundColor: 'rgb(11,29,63)',
  fontSize: '25px',
  textAlign: 'center',
  textTransform: 'capitalize',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
}
export default AccountBalance;