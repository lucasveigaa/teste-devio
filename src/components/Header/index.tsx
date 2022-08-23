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
          <a href="/">Cozinha</a>
          <a href="/">Retirada</a>
        </nav>
      </SubContainer>
    </Container>
  );
}
