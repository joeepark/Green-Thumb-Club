import { useContext, useEffect, useState } from 'react';
import { PRODUCT_QUERY } from '../context/query';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { CartContext } from '../context/CartContext';

export default function ProductPage({ products }) {
  const productsArray = products.data.products.data;
  const [path, setPath] = useState('');
  const { increaseCart, decreaseCart } = useContext(CartContext);

  useEffect(() => {
    setPath(window.location.pathname.slice(1));
  }, []);

  const Product = productsArray.filter((product) => product.attributes.slug === path);
  return (
    <>
      {Product.length > 0 && (
        <div className="product-container">
          <div className="product-image">
            <img src={`${Product[0].attributes.image.data.attributes.formats.small.url}`} />
          </div>
          <div className="product-details">
            <div className="product-header">
              <h3>{Product[0].attributes.name}</h3>
              <span>${Product[0].attributes.price}</span>
            </div>
            <p className="product-content">{Product[0].attributes.content}</p>
            <div className="price-container">
              <button onClick={increaseCart}>
                <AiFillPlusCircle size={30} />
              </button>
              <span>0</span>
              <button onClick={decreaseCart}>
                <AiFillMinusCircle size={30} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://green-thumb-club-app.herokuapp.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      query: PRODUCT_QUERY,
    }),
  });
  const products = await response.json();
  return {
    props: { products },
  };
}
