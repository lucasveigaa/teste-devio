import { createContext, PropsWithChildren, useState } from 'react';
import { ProductProps } from '../types';

interface CartContextType {
  addToCart: (product: ProductProps) => void;
  cart: ProductProps[];
  cleanCart: () => void;
  client: string;
  addClient: (name: string) => void;
  addPaymentForm: (form: string) => void;
  paymentForm: string;
  setChangeValue: React.Dispatch<React.SetStateAction<number>>;
  changeValue: number;
}

export const CartContext = createContext({} as CartContextType);

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [client, setClient] = useState('');
  const [paymentForm, setPaymentForm] = useState('');
  const [changeValue, setChangeValue] = useState(0);

  function addToCart(product: ProductProps) {
    setCart([...cart, product]);
  }

  function addClient(name: string) {
    setClient(name);
  }

  function cleanCart() {
    setCart([]);
  }

  function addPaymentForm(form: string) {
    setPaymentForm(form);
  }

  return (
    <CartContext.Provider
      value={{
        addToCart,
        cart,
        cleanCart,
        addClient,
        client,
        addPaymentForm,
        paymentForm,
        setChangeValue,
        changeValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
