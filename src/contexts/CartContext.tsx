import { createContext, PropsWithChildren, useState } from 'react';
import { ProductProps } from '../types';

interface CartContextType {
  addToCart: (product: ProductProps) => void;
  cart: ProductProps[];
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductProps[]>([]);

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ addToCart, cart, cleanCart }}>
      {children}
    </CartContext.Provider>
  );
}
