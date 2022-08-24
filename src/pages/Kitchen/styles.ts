import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin-bottom: 1rem;

    @media (max-width: 500px) {
      margin-top: 1rem;
    }
  }
`;

export const Preparing = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 2px solid black;
  padding-right: 4rem;

  @media (max-width: 500px) {
    padding-right: 0;
    padding-bottom: 2rem;
    border-right: none;
    border-bottom: 4px solid black;
  }

  strong {
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 0.875rem;
    color: #343434;
    font-weight: 700;
  }
`;

export const ContainerRequest = styled.div`
  margin-bottom: 2rem;
  display: flex;
  padding: 1rem;
  border: 2px solid #000;
  border-radius: 10px;
`;

export const SubContainerRequest = styled.div`
  margin-right: 2rem;
`;

export const Request = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  padding-bottom: 1rem;
  border-bottom: 1px solid;
`;

export const InformationRequest = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerButtons = styled.div``;

interface ButtonProps {
  variant: 'red' | 'green';
}

export const Button = styled.button<ButtonProps>`
  padding: 0.12rem 0.4rem;
  border: 0;
  border-radius: 5px;
  cursor: pointer;

  background: ${props => (props.variant === 'green' ? '#8FDA8B' : '#FFAEAE')};
  color: ${props => (props.variant === 'green' ? '#20A328' : '#F72D2D')};
  margin-right: ${props => props.variant === 'red' && '0.5rem'};

  &:hover {
    filter: brightness(90%);
  }
`;
export const Ready = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;

  @media (max-width: 500px) {
    padding-left: 0;
    padding-bottom: 2rem;
    border-right: none;
  }

  strong {
    font-size: 1.375rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 0.875rem;
    color: #343434;
    font-weight: 700;
  }
`;
