import React, { useRef, useState } from 'react';

import Input from '../../UI/Input';
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef(); //useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        //console.log("addbuttonClicked");

        const enteredAmount = amountInputRef.current.value;
        // converts to number
        const enteredAmountNumber = +enteredAmount;

        if (
            enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5
        ) {
            setAmountIsValid(false);
            return;
        }

        console.log("will be added to card with :" + enteredAmountNumber);
        props.onAddToCart(enteredAmountNumber);
    };

    return (
        <form className={classes.form}
            onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+Add</button>
            {!amountIsValid && <p>Please Enter the valid amount (1-5) </p>}
        </form>
    );
};

export default MealItemForm;