// src/components/ExpenseCard.js
import React, { useRef, useEffect } from 'react';

const ExpenseCard = ({ expenses }) => {
  const expenseListRef = useRef(null);

  useEffect(() => {
    if (expenseListRef.current) {
      expenseListRef.current.scrollTop = expenseListRef.current.scrollHeight;
    }
  }, [expenses]);

  return (
    <div className="expense-card" ref={expenseListRef}>
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-entry">
          <div className="expense-entry-content">
            <h3>{expense.title}</h3>
            <p>Amount: ${expense.amount}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExpenseCard;
