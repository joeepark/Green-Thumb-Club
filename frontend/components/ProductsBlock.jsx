import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import Link from 'next/link';

export default function ProductsBlock() {
  const { products, loading } = useContext(ProductContext);
  const fourProducts = products.slice(1, 5);

  if (loading === true) {
    return <h2>Loading...</h2>;
  } else if (products.length === 0) {
    return <h2>No Products to Show</h2>;
  } else {
    return (
      <div className="products-container">
        {fourProducts.map((product, index) => (
          <div key={index}>
            <Link href={`${product.attributes.slug}`}>
              <img
                src={`${product.attributes.image.data.attributes.formats.small.url}`}
                className="products-image"
              />
            </Link>
            <div className="products-details">
              <div className="products-header">
                <Link href={`${product.attributes.slug}`}>
                  <h4 className='products-name'>{product.attributes.name}</h4>
                </Link>
                <h4 className="products-price">${product.attributes.price}</h4>
              </div>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
