import './ExpenseItem.css';

function ExpenseItem(props) {
 /* better to separate the logic */
 const month = props.date.toLocaleString('en-US', {moanth: 'long'});
 const year = props.data.getFullYear();
 const day = props.data.toLocaleString('en-US', {day: '2-digit'});
 
  return (
    <div className='expense-item'>
      //<div>{props.date.toISOString()}</div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
