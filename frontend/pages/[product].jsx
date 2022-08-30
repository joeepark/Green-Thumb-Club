import Navbar from '../components/Navbar';
import Product from '../components/Product';
import ProductProvider from '../context/ProductContext';

export default function ProductPage() {
  return (
    <ProductProvider>
      <Navbar />
      <Product />
    </ProductProvider>
  );
}
