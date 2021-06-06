import React, {useState} from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals'; //use portal
import Cart from './components/Cart/Cart'; 
import CartProvider from './store/CartProvider';

function App() {
  //const DUMMY_MEALSList = DummyMeals.DUMMY_MEALS;
  const [cartIsVisible, setCartIsVisible] = useState(false);
  
  const showCartHandler = () => {
    console.log("Showing Cart");
    setCartIsVisible(true);
  };

  const hideCartHandler = () => {
    setCartIsVisible(false);
  }

  /*     and can handle visibility from Cart too. - not so nice?  
    <Cart visibility={cartIsVisible} hideCartHandler={hideCartHandler}/>
  */
  return (
    <CartProvider>
      {cartIsVisible && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
