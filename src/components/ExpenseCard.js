// src/components/ExpenseCard.js
import React, { useRef, useEffect } from 'react';

const ExpenseCard = ({ expenses, incomes }) => {
  const expenseListRef = useRef(null);
  const incomeListRef = useRef(null);

  useEffect(() => {
    if (expenseListRef.current) {
      expenseListRef.current.scrollTop = expenseListRef.current.scrollHeight;
    }
    if (incomeListRef.current) {
      incomeListRef.current.scrollTop = incomeListRef.current.scrollHeight;
    }
  }, [expenses, incomes]);

  return (
    <div className="expense-card">
      <div className="income-list" ref={incomeListRef}>
        {incomes.map((income) => (
          <div key={income.id} className="income-entry"> 
            <div className="income-entry-content" >
              <h3>{income.title}</h3>
              <p>Amount: {income.amount}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="expense-list" ref={expenseListRef}>
        {expenses.map((expense) => (
          <div key={expense.id} className="expense-entry">
            <div className="expense-entry-content">
              <h3>{expense.title}</h3>
              <p>Amount: {expense.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseCard;
