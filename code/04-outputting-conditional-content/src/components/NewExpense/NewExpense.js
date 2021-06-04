import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const [shouldOpenForm, setShouldOpenForm] = useState(false);
  const shouldOpenFormHandler = () => {
    //setExpenseFormOpen()
    console.log("button clicked");
    setShouldOpenForm(true);
    //props.addOpenFormHandler(true);
  };

  const addCloseFormHandler = () => {
    console.log("cancel called");
    setShouldOpenForm(false);
  };

  if (!(shouldOpenForm)) {
    return (
      <div className='new-expense'>
        <button onClick={shouldOpenFormHandler}>Add New Expense</button>
      </div>
      );
  } else {
    return (
      <div className='new-expense'>
        <ExpenseForm onCloseForm={addCloseFormHandler} onSaveExpenseData={saveExpenseDataHandler} />
      </div>
    );
  }
};

export default NewExpense;
