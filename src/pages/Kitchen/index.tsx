import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { CartContext } from '../../contexts/CartContext';

import {
  Button,
  Container,
  ContainerButtons,
  ContainerRequest,
  InformationRequest,
  Preparing,
  Ready,
  Request,
  SubContainerRequest,
} from './styles';

export function Kitchen() {
  const { cart, client } = useContext(CartContext);

  return (
    <Container>
      <Preparing>
        <h2>Preparando:</h2>
        <ContainerRequest>
          <SubContainerRequest>
            <strong>Cliente: {client}</strong>
            {cart.map(item => (
              <Request>
                <InformationRequest>
                  <span>
                    {item.amountProduct}x {item.title}
                  </span>
                  {item.observations && (
                    <span>Observações: {item.observations}</span>
                  )}
                  <span>Adicionais:</span>
                  {item.additional.map(add => (
                    <span>{add.title}</span>
                  ))}
                </InformationRequest>
              </Request>
            ))}
          </SubContainerRequest>
          <ContainerButtons>
            <Button variant="red" type="button">
              x
            </Button>
            <Button variant="green" type="button">
              <FaCheck size={8} />
            </Button>
          </ContainerButtons>
        </ContainerRequest>
      </Preparing>
      <Ready>
        <h2>Pronto:</h2>
        <ContainerRequest>
          <SubContainerRequest>
            <strong>Cliente: {client}</strong>
            {cart.map(item => (
              <Request>
                <InformationRequest>
                  <span>
                    {item.amountProduct}x {item.title}
                  </span>
                  {item.observations && (
                    <span>Observações: {item.observations}</span>
                  )}
                  <span>Adicionais:</span>
                  {item.additional.map(add => (
                    <span>{add.title}</span>
                  ))}
                </InformationRequest>
              </Request>
            ))}
          </SubContainerRequest>
          <ContainerButtons>
            <Button variant="red" type="button">
              x
            </Button>
          </ContainerButtons>
        </ContainerRequest>
      </Ready>
    </Container>
  );
}
