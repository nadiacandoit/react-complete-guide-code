//useCallback allows us to save function and not created in every execution. 
import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

import './App.css';

function App() {

  /*
  / value created using useState is considered once the very first time whe the component is loaded. 
  / or unless the component is removed completely from the DOM 
  / Call setter function only "schedule" state change - might get postponed theoretically. 
  / That's why for setter which depends on the previous state, you should use the function form 
  / or use useEffect to ensure function execution based on the latest values in dependecies. 
  + Have a look at state-batching! 
  */ 
  const [allowToggle, setAllowToggle] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  // For every state change, the entire component is re-evaluted(ececuted) 
  // Now inspect the elements section in the developer tools whehter each what is getting rerendered.  
  console.log("APP RUNNING");

  // If this is saved as callbacks then ButtonComponent can be exported with React.Memo
  /* dependency array of useCallback method 
  function is closure in javascript
  when dependecy changes - recreate the function! 
   */
  /*
  const toggleParagraphHandler = () => { 
   // showParagraph ? setShowParagraph(true): setShowParagraph(false);
   setShowParagraph(prevShowParagrah => !prevShowParagrah );
  };
*/
  const toggleParagraphHandler = useCallback(() => {
    // showParagraph ? setShowParagraph(true): setShowParagraph(false);
    //allowToggle is reused when saved as callback. 
    if (allowToggle) {
      setShowParagraph(prevShowParagrah => !prevShowParagrah);
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  // Using the custom element(DemoOut) also does not change the updating mechanism. 
  // only diffed part gets rendered! 
  // If a component is re-executed - it's all children get reevaluated as well. 
  return (
    /*
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>btn clicked</p>}
      <Button onClick={toggleParagraphHandler}>click Me</Button>
    </div>
    */
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph</Button>
    </div>
  );
}

export default App;
