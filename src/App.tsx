import Modal from 'react-modal';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <div>
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  );
}

export default App;
