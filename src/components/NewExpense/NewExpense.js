import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  //boolean that hides expense form
  const [addingExpense, setAddingExpense] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setAddingExpense(false);
  };

  const startAddingHandler = () => {
    setAddingExpense(true);
  };

  const stopAddingHandler = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {/* render conditional content */}
      {!addingExpense && (
        <button onClick={startAddingHandler}>Add New Expense</button>
      )}
      {addingExpense && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopAddingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
