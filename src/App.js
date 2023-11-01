import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import IncomeExpense from './components/IncomeExpense';
import ExpenseCard from './components/ExpenseCard';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';
import Navbar from './components/Navbar';
// import GraphsCard from './components/GraphsCard';
import GraphComponent from './components/GraphComponent';
import Homepage from './components/Homepage';

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
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Routes> 
            <Route path="/" element={<Homepage />} />
            <Route 
              path="/graphs"
              element={
                <div>
                  {/* Pass expenses and incomes to the GraphComponent */}
                  <GraphComponent data={[...expenses, ...incomes]} />
                </div>
              }
            />
            <Route
              path="/budget"
              element={ /* Render the default component */
                <div>
                  <IncomeExpense expenses={expenses} incomes={incomes} /> 
                  <div>
                    <div className='forms'>
                      <IncomeForm onAddIncome={addIncomeHandler} />
                      <ExpenseForm onAddExpense={addExpenseHandler} />
                    </div>
                    <div className="entry-headers">
                      <h3>Incomes: </h3>
                      <h3>Expenses: </h3>
                    </div>
                  </div>
                  <ExpenseCard expenses={expenses} incomes={incomes}  /> 
                </div>
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;