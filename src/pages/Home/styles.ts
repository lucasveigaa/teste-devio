import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  padding: 0.5rem;
  margin: 0 auto;
  margin-top: 3rem;

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
  display: flex;
  justify-content: space-between;

  @media (max-width: 700px) {
    /* flex-direction: column;
      justify-content: center;
      align-items: center; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
  }
`;
