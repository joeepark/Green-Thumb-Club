import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { setShowCart } = useContext(CartContext);
  return (
    <div className="cart-wrapper">
      <div className="cart-container">
        <button type="button" className="cart-heading" onClick={() => setShowCart(false)}></button>
      </div>
    </div>
  );
}

export default Cart;
