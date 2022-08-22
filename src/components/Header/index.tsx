import { FaHamburger } from 'react-icons/fa';
import { Container, SubContainer } from './styles';

export function Header() {
  return (
    <Container>
      <SubContainer>
        <div>
          <FaHamburger />
          <strong>fastfood</strong>
        </div>
        <div>
          <a className="isOnThispage" href="/">
            Pedidos
          </a>
          <a href="/">Cozinha</a>
          <a href="/">Retirada</a>
        </div>
      </SubContainer>
    </Container>
  );
}
