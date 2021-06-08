import useInput from '../hooks/use-input';

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    valueIsValid: enteredFirstNameIsValid,
    hasError: enteredFirstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstNameInput
  } = useInput((value) => { return value.trim() !== ''; });

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameIsValid,
    hasError: enteredLastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastNameInput
  } = useInput((value) => { return value.trim() !== ''; });

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput } = useInput((email) => {
      let validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      return email.match(validEmailRegex);
    });

  let formIsValid = false;
  if (!enteredFirstNameHasError && !enteredLastNameHasError && !emailInputHasError) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName +" " + enteredLastName + "," + enteredEmail);

    resetFirstNameInput();
    resetLastNameInput();
    resetEmailInput();
  }

  const firstnameInputClasses = enteredFirstNameHasError
    ? 'form-control invalid'
    : 'form-control';

  const lastnameInputClasses = enteredLastNameHasError
    ? 'form-control invalid'
    : 'form-control';

  //const emailInputIsInvalid = emailInputHasError && !enteredEmailIsValid
  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className={firstnameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='firstname'
            onChange={firstNameChangeHandler}
            onBlur={firstNameInputBlurHandler}
            value={enteredFirstName}
          />
          {enteredFirstNameHasError && (
            <p className='error-text'>first name field cannot be empty.</p>
          )}
        </div>
        <div className={lastnameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='lastname'
            onChange={lastNameChangeHandler}
            onBlur={lastNameInputBlurHandler}
            value={enteredLastName}
          />
        </div>
        {enteredLastNameHasError && (
          <p className='error-text'>last name field cannot be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailInputBlurHandler}
          value={enteredEmail} />
      </div>
      {emailInputHasError && (
        <p className='error-text'>Please input valid email address.</p>
      )}
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
