import CartProvider from '../context/CartContext';
import Navbar from './Navbar';
import Head from 'next/head';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <CartProvider>
        <Head>
          <title>Green Thumb Club</title>
        </Head>
        <header>
          <Navbar />
        </header>
        <main className="main-container">{children}</main>
        <footer></footer>
      </CartProvider>
    </div>
  );
}
