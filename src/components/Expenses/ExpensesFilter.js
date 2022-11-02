import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
    // yearSelectHandler function that takes the value of an event and passes it to another component
  const yearSelectHandler = (event) => {
    //passes the event value to a parent component
    props.onFilterChangeYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearSelectHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
