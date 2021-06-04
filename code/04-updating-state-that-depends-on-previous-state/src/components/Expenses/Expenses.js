import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {

  const [filteredYear, setFilteredYear] = useState(2019);

  // Form to Expenses. 
  const filterChangeHandler = year => {
    console.log('In Expenses.js');
    console.log(year);
    setFilteredYear(year);
  };

  return (
    <Card className="expenses" >
      <ExpensesFilter onYearSelected={filterChangeHandler} 
                      selected={filteredYear}/>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
    </Card>
  );
}

export default Expenses;
