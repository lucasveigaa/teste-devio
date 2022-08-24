import { FaHamburger } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container, SubContainer } from './styles';

export function Header() {
  return (
    <Container>
      <SubContainer>
        <Link to="/">
          <FaHamburger />
          <strong>fastfood</strong>
        </Link>
        <nav>
          <a className="isOnThispage" href="/">
            Pedidos
          </a>
          <Link to="/kitchen">Cozinha</Link>
          <Link to="/withdraw">Retirada</Link>
        </nav>
      </SubContainer>
    </Container>
  );
}
