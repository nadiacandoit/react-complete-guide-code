import {useState, useRef} from 'react';

// First note. How to fetch the data from a form. 
// (1) store it to a state. 
// (2) useref and fetch it when the user is done - when you needed

// Second note. How will you validate the user data before sending it to server? 
// - this is just for good user experience, not a security mechanisms or anything. 
//      you can manipulate data through browser. 

// Third note. how to listen to focusing! - 'onBlur' on input field
const SimpleInput = (props) => {

  // Validation based on state. 
  // + you can utilize enteredNameIsValid with styling 
  // - default is 'true'. imagine you have useEffect call where enteredNameIsValid is dependent. 
  //    this is incorrect. just an workaround. 
//  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);
  const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);
 // const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);

  //(2) if you want it only once it might be suitable
  const nameInputRef = useRef();

  //(1)  this approach is better
  //  - if you are going to do instant validation, 
  //  - needs to do 2way binding. (Re-set it to clean after form is submitted)
  const [enteredName, setEnteredName] = useState('');

  // Optimization. -> instead of using state, you can use it inferred constant 
  const enteredNameIsValid = enteredName.trim() !== '';

  const validate = (input, notfyFn) => {
    if(input.trim() === '') {
      notfyFn(false);
    }else {
      notfyFn(true);
    }
  };

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
    
    //setEnteredNameIsTouched(true); // from here or from the fromSubmissionHandler? 
    /*
    if(setEnteredNameIsTouched){ //instead of using enteredName use 'event.target.value' 
      validate(event.target.value, setEnteredNameIsValid);
    }*/

  };

  // Related to focusing
  const nameInputBlurHandler = event => {
    
    setEnteredNameIsTouched(true);
   // validate(event.target.value, setEnteredNameIsValid);
/*
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
*/
  };

  const formSubmissionhandler = event => {
    // if a form is submitted.
    // Automatically, a http request is sent to the server serving the website. 
    // this will reload the page, aplication - we are losing our state!
    // As we only have a static server 
    // we don't want this request to be sent
    event.preventDefault();

    setEnteredNameIsTouched(true);
    //validate(enteredName, setEnteredNameIsValid);
    // validation. 
    /*
    if(enteredName.trim() === '') {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
*/
    if(!enteredNameIsValid) {
      return;
    }

    console.log('entered Name: '+ enteredName);

    const enteredValue = nameInputRef.current.value;
    console.log('entered Value: '+ enteredValue);

    setEnteredName('');
    setEnteredNameIsTouched(false);
  };

  // const nameInputClasses = enteredNameIsValid ? 'form-control' : 'form-control invalid';

  // workaround with two states- (1) touched & valid? 
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control';

  return (
<form onSubmit={formSubmissionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange ={nameInputChangeHandler}
        onBlur = {nameInputBlurHandler}
        value={enteredName} />
        {nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}      
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>

    /*
    <form onSubmit={formSubmissionhandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
        ref={nameInputRef} 
        type='text' 
        id='name' 
        onChange ={nameInputChangeHandler}
        value={enteredName} />
        {!enteredNameIsValid && <p className="error-text">Name must not be empty.</p>}      
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
    */
  );
};

export default SimpleInput;
