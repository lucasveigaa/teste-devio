import { createContext, PropsWithChildren, useState } from 'react';
import { ProductProps } from '../types';

interface CartContextType {
  addToCart: (product: ProductProps) => void;
  cart: ProductProps[];
  cleanCart: () => void;
  client: string;
  addClient: (name: string) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [client, setClient] = useState('');

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }

  function addClient(name: string) {
    setClient(name);
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ addToCart, cart, cleanCart, addClient, client }}
    >
      {children}
    </CartContext.Provider>
  );
}
