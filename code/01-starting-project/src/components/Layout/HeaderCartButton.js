import { Fragment, useContext, useState, useEffect } from 'react';

import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
    //State regarding btn animation 
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

    // now use context
    const cartCtx = useContext(CartContext);

    let btnName = props.name;

    // object destructuring
    const { items } = cartCtx;
    const nullCondition = () => { return items.length === 0 };
    const getnumbers = () => {
        return items.reduce((curNumber, item) => {
            return curNumber + item.amount;
        }, 0);
    }
    // TODO: Cannot read property 'reduce' of undefined
    const numberOfCartItems = nullCondition ? 0 : getnumbers();

    // Adding an animation
    // When item is changed, and length is greater than zero
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;
    useEffect(() => {
        if (nullCondition) {
            console.log("no item is in the cart")
            return;
        }
        setBtnIsHighlighted(true);

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
        }, 300);

        //clean up 
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <Fragment>
            <button className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}> <CartIcon /></span>
                <span>{btnName}</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </button>
        </Fragment>
    );
};

export default HeaderCartButton;
