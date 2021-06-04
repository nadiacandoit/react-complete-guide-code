// use named input to import 'useState' function from react library. 
import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  // function clickHandler() {}

  /*
   useState should be called insde the component function
            returns [variable, updatingFunction]
              convention for naming updatingFunction is set + variableName
  updatingFunction triggers re-rendering of the component where update is called.
  when component executes - it gets new snapshots of the variable
  */
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
