import { Component } from 'react';

import classes from './User.module.css';

// the style of writing class & functional based components 
// can be mix and matched. 
class User extends Component {
  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  } 
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
