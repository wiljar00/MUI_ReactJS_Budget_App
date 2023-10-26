import React from 'react';

const ExpenseCard = ({ expenses }) => {
    return (
      <div>
        <h2>Expenses: </h2>

        {expenses.map((expense) => (
          <div key={expense.id} className="expense-card">
            <h3>{expense.title}</h3>
            <p>Amount: ${expense.amount}</p>
          </div>
        ))}
      </div>
    );
  };

export default ExpenseCard;
