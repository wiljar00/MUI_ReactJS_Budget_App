import React, { useState } from 'react';
import './App.css';
import IncomeExpense from './components/IncomeExpense';
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import Navbar from './components/Navbar';

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

  const [incomes, setIncomes] = useState([
    { id: 1, title: 'Paycheck', amount: 150.0 },
  ]);

  const addIncomeHandler = (income) => {
    setIncomes((prevIncomes) => {
      return [...prevIncomes, income];
    });
  };

  return (
    <div>
      <Navbar />
      <IncomeExpense expenses={expenses} incomes={incomes} /> 
      <div className='forms'>
        <IncomeForm onAddIncome={addIncomeHandler} />
        <ExpenseForm onAddExpense={addExpenseHandler} />
      </div>
      <ExpenseCard expenses={expenses} incomes={incomes}  />
    </div>
  );
};

export default App;
