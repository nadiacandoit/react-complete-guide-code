import ExpenseItem from './ExpenseItem';
import './Expenses.css';

/*
Do not forget to 
- match root div with className in css-
- parse props further with the name! 
    not props[0].title, but props.item[0].title
- can use map but then class got encalsulated again. 
    should wrap with expense list and then expenses? 
 */
function Expenses(props) {
    return (
        props.items.map((items) => {
            return (
                <div className="expenses">
                    <ExpenseItem
                        title={items.title}
                        amount={items.amount}
                        date={items.date}
                    />
                </div>)
        })
    )}
    /*
    what does not work somehow
    return (
        <div>
        <h2>Let's get started!</h2>
        props.items.map((items) => {
            return (
                <div className="expenses">
                    <ExpenseItem
                        title={items.title}
                        amount={items.amount}
                        date={items.date}
                    />
                </div>)
        })
        </div>
    )}
     */

    /*
    return (
        <div className="expenses">
            <h2>Let's get started!</h2>
            
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
        </div>
    );
    */

export default Expenses;
