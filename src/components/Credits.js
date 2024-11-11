/*==================================================
src/components/Credits.js

The Credits component contains information for Credits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

const Credits = (props) => {
  const [credits, setCredits] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    // Fetch credits from the API on component mount
    axios.get('https://johnnylaicode.github.io/api/credits.json')
      .then(response => setCredits(response.data))
      .catch(error => console.error("Error fetching credits:", error));
  }, []);

  const handleAddCredit = () => {
    if (description && amount) {
      const newCredit = {
        description,
        amount: parseFloat(amount),
        date: new Date().toISOString(),
      };

      // Update the credits list with the new credit entry
      setCredits([...credits, newCredit]);

      // Update the account balance
      props.updateBalance(props.accountBalance + newCredit.amount);

      // Clear input fields
      setDescription('');
      setAmount('');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Ariel, sans-serif' }}>
      <h1> Account Balance: ${props.accountBalance.toFixed(2)} </h1>

      {/* Credits Table */}
      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '80%' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Amount</th>
            <th style={tableHeaderStyle}>Date</th>
          </tr>
        </thead>
        <tbody>
          {credits.map((credit, index) => (
            <tr key={index}>
              <td style={tableDataStyle}>{credit.description}</td>
              <td style={tableDataStyle}>${credit.amount.toFixed(2)}</td>
              <td style={tableDataStyle}>{new Date(credit.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Add New Credit Form */}
      <h2>Add a New Credit</h2>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          placeholder="Description" 
          style={inputStyle} 
        />
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Amount" 
          style={inputStyle} 
        />

        <button onClick={handleAddCredit} style={buttonStyle}>Add Credit</button>
      </div>

      <Link to="/" style={{ textDecoration: 'none', color: '#4189bf'}}>Return to Home</Link>
    </div>
  );
};

// Visual Elements
const tableHeaderStyle = {
  backgroundColor: '#4189bf',
  color: 'white',
  padding: '10px',
  border: '1px solid #ddd',
};

const tableDataStyle = {
  padding: '10px',
  border: '1px solid #ddd',
  textAlign: 'center',
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

export default Credits;