// src/components/ExpenseForm.js
import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      id: Math.random().toString(),
      title: title,
      amount: +amount,
    };
    onAddExpense(expenseData);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={submitHandler} className="expense-form">
      {/* Your form elements for adding a new expense */}
      <input
        className="expense-input"
        type="text"
        placeholder="Expense Name"
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
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
