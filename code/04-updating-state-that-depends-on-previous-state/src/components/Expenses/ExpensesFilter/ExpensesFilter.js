import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  console.log("Filter"+props.selected);
  //const [selectedYear, setSelectedYear] = useState('');
  const yearChangeHandler = (event) => {
    const expensesFilter = event.target.value;

   // setSelectedYear(expensesFilter);
    //console.log("fromFilter"+expensesFilter);
    props.onYearSelected(expensesFilter);
  };

  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearChangeHandler}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
