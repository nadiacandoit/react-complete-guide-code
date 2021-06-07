import {useState, useEffect} from 'react';

//suffix use signifies that it is a hook- naming convention
//Makes argument, and add it to dependency list. 
const useCounter = (addedValue) => {

    const [counter, setCounter] = useState(0);

    // in the regular case, you might want to wrap the redundant logic into function
    // But react hook can onlz be called in 
    // react function(react component function + custom hooks),
    // at the top level(nested function(x), block statement(x).
    // backward counter is similar in a way that it adds (-1)
    // Additionally, useEffect always add everything you refer to inside of useEffect as a dependency.
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + addedValue);
      }, 1000); //every seconds increase counter
  
      return () => clearInterval(interval);
    }, [addedValue]);
    
    // make it available outside
    // you can return anything. 
    return counter;
};

export default useCounter;