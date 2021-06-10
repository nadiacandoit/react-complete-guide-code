import { useState, useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {
  const [formInputValidity, setFormInputValidity] = useState(
    {name: true,
    street:true,
    city: true,
    postalCode: true}
  );

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const validateNotEmtpy = value => value.trim() !== '';
  const validateIsFiveChars = value => value.trim().length === 5;
  
  const confirmHandler = (event) => {
    event.preventDefault();
    
    const enteredName = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postal = postalInputRef.current.value;
    const city = cityInputRef.current.value;

    /*
    var input;
    for (input in {enteredName, street, postal, city}) {
      if (!validateNotEmtpy(input)){
        return;
      }
    }

    if(validateIsFiveChars(postal)) {
      return;
    }
    */

    const enteredNameIsValid = validateNotEmtpy(enteredName);
    const streetIsValid = validateNotEmtpy(street);
    const postalCodeIsValid = (validateNotEmtpy(postal) && validateIsFiveChars(postal));
    const cityIsValid = validateNotEmtpy(city);
    setFormInputValidity({
      name: enteredNameIsValid,
      street: streetIsValid,
      postal: postalCodeIsValid,
      city: cityIsValid
    })

    const formIsValid = 
    formInputValidity.name && 
    formInputValidity.street && 
    formInputValidity.city && 
    formInputValidity.postal;
    
    console.log(validateIsFiveChars(postal));
  
    if(!formIsValid) {
      console.log('form has invalid input: '+enteredNameIsValid+streetIsValid+postalCodeIsValid+cityIsValid);
      return;
    }

    props.onConfirm({
      name:enteredName,
      steet: street,
      city: city,
      postal: postal
    });

  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name ? ' ' : ' .invalid'}`}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef}/>
        {!formInputValidity.name && <p>please Enter a valid name</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.street ? '' : 'invalid'}`}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef}/>
        {!formInputValidity.street && <p>please Enter a valid street</p>}

      </div>
      <div className={`${classes.control} ${formInputValidity.postal ? ' ' : 'invalid'}`}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal'ref={postalInputRef} />
        {!formInputValidity.postal && <p>please Enter a valid postal code</p>}
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '' : 'invalid'}`}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef}/>
        {!formInputValidity.city && <p>please Enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button> 
      </div>
    </form>
  );
};

export default Checkout;
