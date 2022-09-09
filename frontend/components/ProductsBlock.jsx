import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

export default function ProductsBlock({
  products: {
    attributes: { name, slug, image, price },
  },
}) {
  const { increaseCart } = useContext(CartContext);
  return (
    <div>
      <Link href={`${slug}`}>
        <img src={`${image.data.attributes.formats.small.url}`} className="products-image" />
      </Link>
      <div className="products-details">
        <div className="products-header">
          <Link href={`${slug}`}>
            <h4 className="products-name">{name}</h4>
          </Link>
          <h4 className="products-price">${price}</h4>
        </div>
      </div>
    </div>
  );
}
