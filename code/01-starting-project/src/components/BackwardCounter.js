//import { useState, useEffect } from 'react';
import UseCounter from '../hooks/use-counter';
import Card from './Card';

const BackwardCounter = () => {
 /* const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
*/
const counter = UseCounter(-1);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
