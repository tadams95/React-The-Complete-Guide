// import ExpenseItem from "./components/ExpenseItem";
import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMMY_EXPENSES = [
  {
    id: "e1",
    title: "Festival Tickets",
    amount: 294.67,
    date: new Date(2022, 9, 27),
  },
  {
    id: "e2",
    title: "Car Insurance",
    amount: 88,
    date: new Date(2021, 9, 27),
  },

  {
    id: "e3",
    title: "Rent",
    amount: 3330,
    date: new Date(2020, 9, 27),
  },
  {
    id: "e4",
    title: "Groceries",
    amount: 200,
    date: new Date(2022, 9, 27),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses items={expenses} />
    </div>
  );
};

export default App;
