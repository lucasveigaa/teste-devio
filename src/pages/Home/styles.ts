import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 1rem;
  margin: 0 auto;
  margin-top: 3rem;

  @media (max-width: 700px) {
    max-width: 90%;
  }

  input {
    margin-top: 1rem;
    background: #f4f1f1;
    border: 0;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    width: 300px;

    &::placeholder {
      color: #a2a2a2;
    }
  }
`;

export const ContainerCategories = styled.div`
  margin-top: 3rem;

  span {
    color: #5e5e5e;
    font-size: 0.75rem;
  }
`;

export const DivItensCategories = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;

  @media (max-width: 700px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;

export const ContainerProducts = styled.main`
  margin-top: 3rem;

  span {
    color: #5e5e5e;
    font-size: 0.75rem;
  }
`;

export const SubContainerProducts = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 3rem;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    justify-items: center;
  }
`;

export const ContainerRequests = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: calc(25% - 180px);
  border-radius: 5px;
  border: 1px solid #acacac;
  padding: 2rem;
  margin-top: 2rem;

  @media (max-width: 700px) {
    max-width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
  }
`;

export const SubContainerRequests = styled.div`
  margin-bottom: 2rem;
  position: relative;
  padding-right: 1rem;
`;

export const ButtonRemoveItemCart = styled.button`
  position: absolute;
  top: 0.1rem;
  right: -1.3rem;
  border: 0;
  background: transparent;
  cursor: pointer;

  img {
    color: red;
  }

  &:hover {
    filter: brightness(85%);
  }
`;

export const Requests = styled.div`
  padding-bottom: 0.5rem;
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
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  strong {
    font-size: 1.8rem;
    margin-top: 0.5rem;
  }
`;

export const ContainerButtons = styled.div`
  margin-top: 3rem;
  gap: 0.5rem;
  display: flex;
  justify-content: flex-end;
  margin-right: calc(25% - 180px);
  width: 100%;
  margin-bottom: 1rem;

  @media (max-width: 700px) {
    flex-direction: column;
    max-width: 90%;
    margin: 0 auto;
    margin-top: 3rem;
  }
`;

export const Button = styled.button`
  padding: 0.65rem 0;
  width: 200px;
  margin-left: 3rem;
  border-radius: 10px;
  font-weight: 700;

  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`;

export const CancelButton = styled(Button)`
  background: #fff;
  color: #929292;
  border: 1px solid #929292;

  @media (max-width: 500px) {
    margin-bottom: 0.5rem;
  }
`;
export const FinalizeButton = styled(Button)`
  background: #929292;
  border: 1px solid #929292;
  color: #fff;
`;
