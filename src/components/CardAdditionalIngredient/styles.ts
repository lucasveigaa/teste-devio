import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 0.5rem 0;

  img {
    width: 50px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  margin: 0 1.5rem;

  div {
    display: flex;
    flex-direction: column;
  }
`;
