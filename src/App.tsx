import Modal from 'react-modal';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

function App() {
  return (
    <div>
      <Home />
      <GlobalStyle />
    </div>
  );
}

export default App;
