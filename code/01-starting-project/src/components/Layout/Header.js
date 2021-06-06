import React from 'react';

import HeaderCartButton from './HeaderCartButton';

// src = {mealsImage}Serve local image - 
// src="Url" is also possible 
import mealsImage from '../../assets/meals.jpg';

import classes from "./Header.module.css";

// heads header and div holding image
const Header = props => {
    return (
        <React.Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton name="Your Cart" addedItems="3" onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt=" a table full of delicious food"/>
            </div>
        </React.Fragment>
    );
};

export default Header;
