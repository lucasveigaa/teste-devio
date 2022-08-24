import { useContext } from 'react';
import { RequestsContext } from '../../contexts/RequestsContext';
import { Container, Preparing, Ready } from './styles';

export function Withdraw() {
  const { requests, readyRequests } = useContext(RequestsContext);

  return (
    <Container>
      <Preparing>
        <strong>Preparando:</strong>
        {requests.map(req => (
          <span key={req.client}>{req.client}</span>
        ))}
      </Preparing>
      <Ready>
        <strong>Pronto:</strong>
        {readyRequests.map(req => (
          <span key={req.client}>{req.client}</span>
        ))}
      </Ready>
    </Container>
  );
}
