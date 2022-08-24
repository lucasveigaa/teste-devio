import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem 2rem 1rem 2rem;
  width: 180px;
  height: 150px;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.09) 0px 1px 5px;
  border-radius: 5px;
  font-size: 0.875rem;
  cursor: pointer;

  @media (max-width: 700px) {
    height: fit-content;
  }

  img {
    height: 100px;
    max-width: 100px;
  }
`;
