import { useState, useReducer } from 'react';

const initialInputState = {
    value: '',
    isTouched: false
};

const inputStateReducer = (state, action) => {
    if (action.type === 'BLUR') {
        return {
            value: state.value,
            isTouched: true
        };
    }
    if (action.type === 'INPUT') {
        return {
            value: action.value,
            isTouched: state.isTouched
        };
    }

    if (action.type === 'RESET') {
        return initialInputState;
    }

    //default case 
    return initialInputState;
}
const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

    /*
        const [enteredValue, setEnteredValue] = useState('');
        const [isTouched, setIsTouched] = useState(false);
        ///custom
        const valueIsValid = validateValue(enteredValue);
        const hasError = !valueIsValid && isTouched;
    */

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const valueChangeHandler = (event) => {
        dispatch({ type: 'INPUT', value: event.target.value });
        // setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        dispatch({ type: 'BLUR'});
        //setIsTouched(true);
    };

    /*
    const formSubmissionHandler = (event) => {
        setIsTouched(true);
        if (!valueIsValid) { return; }
    };
    */

    const reset = () => {
        dispatch({ type: 'RESET'});
/*
        setEnteredValue('');
        setIsTouched(false);
        */
    }

    return {
        value: inputState.value, // enteredValue,
        valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurHandler,
        reset
    }

};

export default useInput;