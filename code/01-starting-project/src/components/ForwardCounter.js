import useCounter from '../hooks/use-counter';
import Card from './Card';

const ForwardCounter = () => {
  
  //executes useCounter(create hook)
  //state within useCounter hook is now bound to ForwardCounter components.
  const counter = useCounter(3);
  
  return (<Card>{counter}</Card>);
  // We will outsource this logic 
  /*
  const [counter, setCounter] = useState(0);

  // in the regular case, you might want to wrap the redundant logic into function
  // But react hook can onlz be called in 
  // react function(react component function + custom hooks),
  // at the top level(nested function(x), block statement(x).
  // backward counter is similar in a way that it adds (-1)
  // Additionally, useEffect always add everything you refer to inside of useEffect as a dependency.
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000); //every seconds increase counter

    return () => clearInterval(interval);
  }, []);
  return <Card>{counter}</Card>;
  */


};

export default ForwardCounter;
