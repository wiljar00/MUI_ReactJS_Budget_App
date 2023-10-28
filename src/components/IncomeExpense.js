// src/components/IncomeExpense.js
import React, { useEffect, useState, useRef } from 'react';

const IncomeExpense = ({ expenses, incomes }) => {
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [totalIncomes, setTotalIncomes] = useState(0);
  const totalExpensesRef = useRef(null);
  const totalIncomesRef = useRef(null);
  const [isTotalExpensesUpdated, setIsTotalExpensesUpdated] = useState(false);
  const [isTotalIncomesUpdated, setIsTotalIncomesUpdated] = useState(false);

  useEffect(() => {
    setTotalExpenses(expenses.reduce((total, expense) => total + expense.amount, 0));
    setIsTotalExpensesUpdated(true);
  }, [expenses]);

  useEffect(() => {
    setTotalIncomes(incomes.reduce((total, income) => total + income.amount, 0));
    setIsTotalIncomesUpdated(true);
  }, [incomes]);

  useEffect(() => {
    if (isTotalExpensesUpdated && totalExpensesRef.current) {
      totalExpensesRef.current.classList.remove('animate');
      void totalExpensesRef.current.offsetWidth;
      totalExpensesRef.current.classList.add('animate');
      setIsTotalExpensesUpdated(false);
    }
  }, [isTotalExpensesUpdated, totalExpenses]);

  useEffect(() => {
    if (isTotalIncomesUpdated && totalIncomesRef.current) {
      totalIncomesRef.current.classList.remove('animate');
      void totalIncomesRef.current.offsetWidth;
      totalIncomesRef.current.classList.add('animate');
      setIsTotalIncomesUpdated(false);
    }
  }, [isTotalIncomesUpdated, totalIncomes]);

  return (
    <div className="income-expense-container">
      <div className="item">
        <h2>
          Total Income: <span ref={totalIncomesRef} className="animate">${totalIncomes.toFixed(2)}</span>
        </h2>
      </div>
      <div className="item">
        <h2>
          Total Expenses: <span ref={totalExpensesRef} className="animate">${totalExpenses.toFixed(2)}</span>
        </h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
