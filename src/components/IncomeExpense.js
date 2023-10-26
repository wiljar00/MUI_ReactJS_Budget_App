// src/components/IncomeExpense.js
import React, { useEffect, useState, useRef } from 'react';

const IncomeExpense = ({ expenses }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const totalExpensesRef = useRef(null);

  useEffect(() => {
    setTotalExpenses(
      expenses.reduce((total, expense) => total + expense.amount, 0)
    );
    if (totalExpensesRef.current) {
      totalExpensesRef.current.classList.remove("animate");
      void totalExpensesRef.current.offsetWidth; // Trigger reflow to restart the animation
      totalExpensesRef.current.classList.add("animate");
    }
  }, [expenses]);

  return (
    <div className="income-expense-container">
      <div className="item">
        <h2 style={{ animation: "fadeInAnimation 2s ease-in-out" }}>
          Income: $XXXX
        </h2>
      </div>
      <div className="item">
        <h2>
          Expenses: $<span ref={totalExpensesRef} className="animate">{totalExpenses.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
