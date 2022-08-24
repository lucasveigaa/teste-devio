import { useContext } from 'react';
import { FaCheck } from 'react-icons/fa';
import { RequestsContext } from '../../contexts/RequestsContext';

import {
  Button,
  Container,
  ContainerAdditional,
  ContainerButtons,
  ContainerRequest,
  InformationRequest,
  Preparing,
  Ready,
  Request,
  SubContainerRequest,
} from './styles';

export function Kitchen() {
  const {
    requests,
    removeRequest,
    addReadyRequests,
    readyRequests,
    removeReadyRequest,
  } = useContext(RequestsContext);

  return (
    <Container>
      <Preparing>
        <h2>Preparando:</h2>
        {requests.map(req => (
          <ContainerRequest>
            <SubContainerRequest>
              <strong>Cliente: {req.client}</strong>
              {req.cart.map(item => (
                <Request key={item.id}>
                  <InformationRequest>
                    <span>
                      {item.amountProduct}x {item.title}
                    </span>
                    {item.observations && (
                      <span>Observações: {item.observations}</span>
                    )}
                    {item.additional.length > 0 && (
                      <ContainerAdditional>
                        <span>Adicionais:</span>
                        {item.additional.map(add => (
                          <span key={add.title}> {add.title} </span>
                        ))}
                      </ContainerAdditional>
                    )}
                  </InformationRequest>
                </Request>
              ))}
            </SubContainerRequest>
            <ContainerButtons>
              <Button
                onClick={() => removeRequest(req)}
                variant="red"
                type="button"
              >
                x
              </Button>
              <Button
                onClick={() => addReadyRequests(req)}
                variant="green"
                type="button"
              >
                <FaCheck size={8} />
              </Button>
            </ContainerButtons>
          </ContainerRequest>
        ))}
      </Preparing>

      <Ready>
        <h2>Pronto:</h2>
        {readyRequests.map(req => (
          <ContainerRequest>
            <SubContainerRequest>
              <strong>Cliente: {req.client}</strong>
              {req.cart.map(item => (
                <Request key={item.id}>
                  <InformationRequest>
                    <span>
                      {item.amountProduct}x {item.title}
                    </span>
                    {item.observations && (
                      <span>Observações: {item.observations}</span>
                    )}
                    <span>Adicionais:</span>
                    {item.additional.map(add => (
                      <span key={add.title}>{add.title}</span>
                    ))}
                  </InformationRequest>
                </Request>
              ))}
            </SubContainerRequest>
            <ContainerButtons>
              <Button
                onClick={() => removeReadyRequest(req)}
                variant="red"
                type="button"
              >
                x
              </Button>
            </ContainerButtons>
          </ContainerRequest>
        ))}
      </Ready>
    </Container>
  );
}
