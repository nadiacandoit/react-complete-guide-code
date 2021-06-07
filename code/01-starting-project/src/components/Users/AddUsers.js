import React, { useState } from 'react';

import Card from '../UI/Card'
import Button from '../UI/Button'
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUsers.module.css';

const AddUsers = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if (enteredUserName.trim().length === 0) {
            console.log("emptyName");
            setError({
                title: 'Invalid Name Input',
                message: 'User Name is empty'
            });
            return;
        }

        if (enteredAge.trim().length === 0) {
            console.log("emptyAge");
            setError({
                title: 'Invalid Age Input',
                message: 'Age Field is empty'
            });
            return;
        }

        //by putting + we force conversion to number  
        if (+enteredAge < 1) {
            console.log("invalidAge");
            setError({
                title: 'Invalid Age Input',
                message: 'Age should be a number larger than 1'
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge);
        setEnteredAge('');
        setEnteredUserName('');

    };

    const errorHandler = () => {
        setError(null);
    };

    const userNameChangeHandler = (event) => {
        console.log("userName: " + event.target.value);
        setEnteredUserName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        console.log("age: " + event.target.value);
        setEnteredAge(event.target.value);
    };

    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onCancel={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUsers;
