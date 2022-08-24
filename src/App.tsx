import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './contexts/CartContext';
import { RequestsProvider } from './contexts/RequestsContext';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

import 'react-toastify/dist/ReactToastify.css';

Modal.setAppElement('#root');

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <RequestsProvider>
            <ToastContainer autoClose={3000} />
            <Router />
            <GlobalStyle />
          </RequestsProvider>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
