import './Card.css';

/* defines resuable wrapper
Card is conventional name in web developmet 
  meaning enclosed box with round corner with drop shadow..
*/
function Card(props) {
  const classes = 'card ' + props.className;
  
  /*props.children 
  children is a reserved name 
  value of this always be the content of 
  the opening and closing tags between your custom component
  */
  return <div className={classes}>{props.children}</div>;
}

export default Card;
