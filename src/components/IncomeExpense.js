import React from 'react';

const IncomeExpense = ({ expenses }) => {
    // Function to calculate the total sum of all expenses
    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  
    return (
      <div className="income-expense-container">
        <div className="item">
          <h2>Income: $XXXX</h2> {/* Replace XXXX with the actual income value */}
        </div>
        <div className="item">
          <h2>Expenses: ${totalExpenses.toFixed(2)}</h2> 
        </div>
      </div>
    );
  };

export default IncomeExpense;
