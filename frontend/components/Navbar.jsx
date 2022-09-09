import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';
import Cart from './Cart';

export default function Navbar() {
  const { cartQty, showCart, setShowCart } = useContext(CartContext);

  return (
    <div className="navbar-container">
      <h2>
        <Link href="/">Green Thumb Club</Link>
      </h2>
      <>
        <ul className="links">
          <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{cartQty}</span>
          </button>
        </ul>
      </>
      {showCart && <Cart />}
    </div>
  );
}
