import React, {useContext} from 'react';

import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = (props) => {
    const cartCtx = useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`;
    
    const addToCartHandler = (amount) => {
        //console.log("item added: " + props.description);
        cartCtx.addItem({
            id: props.id,
            name: props.name, 
            amount: amount,
            price: props.price
        });
    };

    return (
        <li className={classes.meal}>
            <div>
                <h3 className={classes.h3}>{props.name}</h3>
            </div>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </li>
    );
};

export default MealItem;