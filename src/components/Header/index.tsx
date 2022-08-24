import { FaHamburger } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Container, SubContainer } from './styles';

export function Header() {
  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <Container>
      <SubContainer>
        <Link to="/">
          <FaHamburger />
          <strong>fastfood</strong>
        </Link>
        <nav>
          <Link className={pathname === '/' ? 'isOnThispage' : ''} to="/">
            Pedidos
          </Link>
          <Link
            className={pathname === '/kitchen' ? 'isOnThispage' : ''}
            to="/kitchen"
          >
            Cozinha
          </Link>
          <Link
            className={pathname === '/withdraw' ? 'isOnThispage' : ''}
            to="/withdraw"
          >
            Retirada
          </Link>
        </nav>
      </SubContainer>
    </Container>
  );
}
