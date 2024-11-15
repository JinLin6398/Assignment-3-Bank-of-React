/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Credits = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  const handleAddCredit = (event) => {
    event.preventDefault();
    const newCredit = {
      id: Math.random().toString(36).substr(2, 9),
      description: description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    props.addCredit(newCredit); // Call parent function to add new credit
    setDescription("");
    setAmount("");
  };

  return (
    <div style={pageStyle}>
      <h1> Account Balance: ${props.accountBalance.toFixed(2)} </h1>

      {/* Credits Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {props.credits.map((credit, index) => (
            <tr key={index}>
              <td style={tableDataStyle}>{credit.description}</td>
              <td style={tableDataStyleCredit}>${credit.amount.toFixed(2)}</td>
              <td style={tableDataStyle}>{new Date(credit.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Credit Form */}
      <h2>Add a New Credit</h2>
      <form onSubmit={handleAddCredit}>
        <input
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={inputStyle}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={inputStyle}
          required
        />
        <button type="submit" style={buttonStyle}>Add Credit</button>
      </form>

      <br />
      <Link to="/" style={returnButtonStyle}>Return to Home</Link>
    </div>
  );
};

const tableHeaderStyle = {
  backgroundColor: '#4189bf',
  color: 'white',
  padding: '10px',
  border: '1px solid #cc',
};

const tableDataStyle = {
  padding: '10px',
  borderBottom: '2px solid #ccc',
  textAlign: 'center',
};

const tableDataStyleCredit = {
  padding: '10px',
  borderBottom: '2px solid #ccc',
  textAlign: 'center',
  backgroundColor: '#a1d6b2'
};

const inputStyle = {
  padding: '10px',
  margin: '0 5px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4189bf',
  color: 'white',
  cursor: 'pointer',
};

const tableStyle = {
  margin: '20px auto',
  borderLeft: '0px solid #ddd',
  borderRight: '0px solid #ccc', 
  borderCollapse: 'collapse', 
  width: '80%',
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

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vb',
  width:  '100vi',
  backgroundColor: 'rgb(213, 235, 255)',
  textAlign: 'center',
  alignItems: 'center', 
  fontFamily: 'Ariel, sans-serif'
}

export default Credits;