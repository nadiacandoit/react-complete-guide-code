import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filterByYear = (element) => {
    return element.date.getFullYear().toString() === filteredYear;
  }
  const filteredExpense = filterByYear(expense);
  /*
    by adding key, which is unique for each items, 
    we can act react to add only needed data to the right place 
  
   */
  return (
    <div>
      <Card className='expenses'>
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((filteredExpense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
       ))}
      </Card>
    </div>
  );
};

export default Expenses;
