import { createContext, useState } from 'react';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartQty, setCartQty] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQty, setTotalQty] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);



  const increaseCart = () => {
    setCartQty((prev) => prev + 1);
  };

  const decreaseCart = () => {
    if (cartQty > 0) {
      setCartQty((prev) => prev - 1);
    }
  };

  return (
    <CartContext.Provider value={{ increaseCart, decreaseCart, cartQty, showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
}
