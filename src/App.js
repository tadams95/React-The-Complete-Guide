// import ExpenseItem from "./components/ExpenseItem";
import React from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const expenses = [
    {
      title: "Festival Tickets",
      amount: 294.67,
      date: new Date(2022, 9, 27),
    },
    {
      title: "Car Insurance",
      amount: 88,
      date: new Date(2022, 9, 27),
    },

    {
      title: "Rent",
      amount: 3330,
      date: new Date(2022, 9, 27),
    },
    { title: "Groceries", amount: 200, date: new Date(2022, 9, 27) },
  ];

  const addExpenseHandler = expense => {
    
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
