import { createContext } from 'react';

export const CartContext = createContext();

export default function CartContext({ children }) {
  const [cart, setCart] = useState(0);
  

  return <CartContext.Provider>{children}</CartContext.Provider>;
}
