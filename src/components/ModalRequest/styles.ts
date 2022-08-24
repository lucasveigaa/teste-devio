import styled from 'styled-components';

export const TextStrong = styled.strong`
  display: block;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const ExplicationText = styled.span`
  color: #5e5e5e;
  font-size: 0.875rem;
`;

export const TextAreaObservations = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 1rem;
  border: 0;
  background: #f4f1f1;
  border-radius: 5px;

  &::placeholder {
    color: a2a2a2;
  }
`;

export const ContainerFinalizingOrder = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #acacac;
`;

export const SubContainerFinalizingOrder = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const ContainerAdditionals = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  font-size: 0.75rem;
`;

export const ContainerTotalAmount = styled.div`
  border-top: 2px dotted #acacac;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-top: 1rem;

  strong {
    padding-top: 1rem;
    font-size: 1.5rem;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: space-between;
  }
`;

interface ButtonProps {
  variant: 'white' | 'green';
}

export const ButtonFinalizeRequest = styled.button<ButtonProps>`
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
