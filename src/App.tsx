import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './contexts/CartContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <Router />
          <GlobalStyle />
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
