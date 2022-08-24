import { Container, Preparing, Ready } from './styles';

export function Withdraw() {
  return (
    <Container>
      <Preparing>
        <strong>Preparando:</strong>
        <span>Ricardo</span>
        <span>Luiza</span>
        <span>Fernanda</span>
        <span>Bruna</span>
      </Preparing>
      <Ready>
        <strong>Pronto:</strong>
        <span>Camila</span>
      </Ready>
    </Container>
  );
}
