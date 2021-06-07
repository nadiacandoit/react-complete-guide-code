import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log("button RUNNING");

  return (    
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

// function passed to btn is created every time app is executed. 
// React.memo compare passed props by regular comparision operators (===)
// In javascript, === works only for primitive values. 
// Things like function, and array won't work this way. 

// export default Button;
export default React.memo(Button);
