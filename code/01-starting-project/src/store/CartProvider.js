import { useReducer } from 'react';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {

        //concat would create new array with the added value!
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.item.id
        );
        const existingCartItem = state.item[existingCartItemIndex];

        let updatedItems;
        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem, 
                amount: existingCartItem.amount + action.item.amount 
            };
            updatedItems = [...state.items];
            updatedItem[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        //const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        console.log(updatedItems, updatedTotalAmount);
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    } 
    
    if(action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            item => item.id === action.id
        );
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price; 

        let updatedItems; 
        if(existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        } else {
            const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    
    return defaultCartState;
};

const CartProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer, 
        defaultCartState);

    const addItemToCartHandler = item => {
        console.log("addedToCart");
        //forwrding the item with the 'ADD' action. 
        dispatchCartAction({ type: 'ADD', item: item })
    };

    const removeItemFromCartHandler = id => {
        console.log("removingFromCart");
        dispatchCartAction({ type: 'REMOVE', item: id })
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    };

    return (
        <CartContext.Provider value={CartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
