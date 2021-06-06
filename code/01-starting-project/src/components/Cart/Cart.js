
import { useContext } from 'react';

import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => { };

    const cartItemAddHandlder = item => { };

    //binds pre-configure the argument to the function for the future. 
    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={cartItemRemoveHandler.bind(null, item.id)}
                    onAdd={cartItemAddHandlder.bind(null, item)} />
            ))}
        </ul>
    );

    const closeHandler = (event) => {
        console.log("closed clicked");
        props.onClose();
    };

    const orderHandler = (event) => {
        console.log("order clicked");
    };

    return (
        <Modal onClose={closeHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>TotalAmount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={closeHandler}>Close</button>
                {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
            </div>
        </Modal>
    );

};

export default Cart;
