// src/components/IncomeForm.js
import React, { useState } from 'react';

const IncomeForm = ({ onAddIncome }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const incomeData = {
      id: Math.random().toString(),
      title: title,
      amount: +amount,
    };
    onAddIncome(incomeData);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      <h3>Enter your next income: </h3>
      <input
        className="expense-input"
        type="text"
        placeholder="Income Source"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        className="expense-input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit" className="expense-button">
        Add Income
      </button>
    </form>
  );
};

export default IncomeForm;
