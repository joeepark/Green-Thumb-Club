import { useContext, useEffect, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';

export default function Product() {
  const { products, loading } = useContext(ProductContext);
  const [path, setPath] = useState('');

  useEffect(() => {
    setPath(window.location.pathname.slice(1));
  }, []);

  const Product = products.filter((product) => product.attributes.slug === path);

  if (loading === true) {
    return <h2>Loading...</h2>;
  } else if (products.length === 0) {
    return <h2>No Products to Show</h2>;
  } else {
    return (
      <div className="product-container">
        <div className="product-image">
          <img src={`${Product[0].attributes.image.data.attributes.formats.small.url}`} />
        </div>
        <div className="product-details">
          <div className="product-header">
            <h3>{Product[0].attributes.name}</h3>
            <span>${Product[0].attributes.price}</span>
          </div>
          <p>{Product[0].attributes.content}</p>
          <div className="price-container">
            <AiFillPlusCircle size={30} />
            <span>0</span>
            <AiFillMinusCircle size={30} />
          </div>
        </div>
      </div>
    );
  }
}
