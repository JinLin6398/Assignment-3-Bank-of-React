/*==================================================
src/components/Debits.js

The Debits component contains information for Debits page view.
Note: You need to work on this file for the Assignment.
==================================================*/
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

const Debits = (props) => {

  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");



  const handleAddDebit = (event) => {
    event.preventDefault();
    const newDebit = {
      id: Math.random().toString(36).substr(2, 9),
      description: description,
      amount: parseFloat(amount),
      date: new Date().toISOString(),
    };
    props.addDebit(newDebit);
    setDescription("");
    setAmount("");
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Ariel, sans-serif' }}>
      <h1> Account Balance: ${props.accountBalance.toFixed(2)} </h1>
      <table style={{ margin: '20px auto', borderCollapse: 'collapse', width: '80%' }}>
          <thead>
            <tr>
              <th style={tableHeaderStyle}>Description</th>
              <th style={tableHeaderStyle}>Amount</th>
              <th style={tableHeaderStyle}>Date</th>
            </tr>
          </thead>
          <tbody>
          {
         
         props.debits.map((debits, index) => (
            <tr key={index}>
              <td style={tableDataStyle}>{debits.description}</td>
              <td style={tableDataStyle}>${debits.amount.toFixed(2)}</td>
              <td style={tableDataStyle}>{new Date(debits.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
        </table>

        <h2>Add a New Debit</h2>
      <form onSubmit={handleAddDebit}>
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
        <button type="submit" style={buttonStyle}>Add Debit</button>
      </form>

      <br />
      <Link to="/">Return to Home</Link>
    </div>
  );
};

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
export default Debits;
