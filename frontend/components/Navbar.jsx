import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="nav-bar">
      <h2>
        <Link href="/">Green Thumb Club</Link>
      </h2>
      <>
        <ul className="links">
          <li>
            <Link href="/about">About</Link>
          </li>
          <Link href="/cart">
            <FaShoppingCart size={20} className='cart'/>
          </Link>
        </ul>
      </>
    </div>
  );
}
