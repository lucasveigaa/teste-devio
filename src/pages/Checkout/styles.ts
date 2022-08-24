import styled from 'styled-components';

export const Container = styled.main`
  padding: 2rem 0;
  font-size: 0.875rem;
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  margin: 0 auto;

  @media (max-width: 850px) {
    /* padding: 2rem 1rem; */
  }

  h1 {
    @media (max-width: 850px) {
      margin: 0 auto;
    }
    svg {
      margin-right: 0.5rem;
    }
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;

  @media (max-width: 850px) {
    justify-content: flex-start;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 2rem;
    gap: 2rem;
  }

  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const SummaryPayment = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 850px) {
    margin-bottom: 2rem;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const ContainerRequests = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid #acacac;
  padding: 1.5rem;
  margin-top: 1rem;
`;

export const SubContainerRequests = styled.div`
  margin-bottom: 2rem;
`;

export const Requests = styled.div`
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;

  .amount {
    margin-right: 0.5rem;
  }
`;

export const ObservationText = styled.span`
  display: block;
  font-size: 0.75rem;
`;

export const ContainerAdditionalItens = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 0.75rem;
  }
`;

export const ContainerTotalAmount = styled.div`
  border-top: 2px dotted #acacac;
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 1.8rem;
    margin-left: 3rem;
  }
`;

export const ClienteInfos = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  strong {
    font-size: 0.75rem;
    margin-bottom: 0.2rem;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  #clientcode {
    width: 50px;
  }

  input {
    font-size: 0.75rem;
    background: #f4f1f1;
    border: 0;
    padding: 0.4rem 0.5rem;
    border-radius: 5px;

    &::placeholder {
      color: #acacac;
    }
  }
`;

export const ContainerClientName = styled.div`
  flex: 1;
`;

export const ContainerPaymentForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentForm = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid #acacac;
  padding: 1.5rem;
  margin-top: 1rem;

  strong {
    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }

  input {
    margin-left: auto;
  }
`;

export const ContainerChangeValue = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: column;
  }

  input {
    font-size: 0.75rem;
    background: #f4f1f1;
    border: 0;
    padding: 0.4rem 0.5rem;
    border-radius: 5px;
    margin-top: 0.5rem;

    &::placeholder {
      color: #acacac;
    }
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 3rem;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;

  @media (max-width: 850px) {
    justify-content: center;
  }
`;

interface ButtonProps {
  variant: 'white' | 'green';
}

export const ButtonFinalizeCheckout = styled.button<ButtonProps>`
  width: 200px;
  padding: 0.5rem 0;
  margin-left: 2rem;
  border-radius: 12px;
  font-weight: 700;
  border: 0;
  color: ${props => (props.variant === 'white' ? '#095812' : '#FFF')};
  background: ${props => (props.variant === 'white' ? '#FFF' : '#095812')};
  border: ${props => props.variant === 'white' && '1px solid #095812'};

  @media (max-width: 500px) {
    margin: 0;
    width: 150px;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(90%);
  }
`;
