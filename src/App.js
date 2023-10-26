import React, { useState } from 'react';
import './App.css';
import IncomeExpense from './components/IncomeExpense';
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';

const App = () => {
  // Dummy data for expenses
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Groceries', amount: 50.0 },
    { id: 2, title: 'Gas', amount: 30.0 },
    { id: 3, title: 'Dinner', amount: 40.0 },
    // Add more expense objects as needed
  ]);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <div>
      <h1> Budget App </h1>
      <IncomeExpense expenses={expenses} /> 
      <h3>Enter your next expense: </h3>
      <ExpenseForm onAddExpense={addExpenseHandler} />
      <ExpenseCard expenses={expenses} />
    </div>
  );
};

export default App;
