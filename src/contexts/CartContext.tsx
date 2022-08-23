import { createContext, PropsWithChildren, useState } from 'react';
import { ProductProps } from '../types';

interface CartContextType {
  addToCart: (product: ProductProps) => void;
  cart: ProductProps[];
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }
  return (
    <CartContext.Provider value={{ addToCart, cart }}>
      {children}
    </CartContext.Provider>
  );
}
