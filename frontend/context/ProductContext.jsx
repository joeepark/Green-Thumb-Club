import { createContext, useEffect, useState } from 'react';
import { PRODUCT_QUERY } from './query';

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://green-thumb-club-app.herokuapp.com/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: PRODUCT_QUERY,
        }),
      });
      const data = await response.json();
      setProducts(data.data.products.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ProductContext.Provider value={{ products, loading }}>{children}</ProductContext.Provider>
  );
}
