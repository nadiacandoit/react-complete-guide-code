/* Empty component which just returns children of props. 
This is used to satisfy one root element requirement of jsx. 
*/
const Wrapper = props => {
  return props.children;
};

export default Wrapper;