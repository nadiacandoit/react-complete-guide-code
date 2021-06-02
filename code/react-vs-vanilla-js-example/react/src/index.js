import React from 'react';
import ReactDOM from 'react-dom';

// this does not work in vanilla js, but in react app! 
import './index.css';
import App from './App'; //for 3rd party library you omit .js

// App holds index.html whih has root div.
// this is the syntax from jsx. 
ReactDOM.render(<App />, document.getElementById('root'));
