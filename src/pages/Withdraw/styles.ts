import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Preparing = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 4px solid black;
  padding-right: 4rem;

  @media (max-width: 500px) {
    padding-right: 0;
    padding-bottom: 2rem;
    border-right: none;
    border-bottom: 4px solid black;
  }

  strong {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 4rem;
    color: #838383;
    font-weight: 700;
  }
`;

export const Ready = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 4rem;

  @media (max-width: 500px) {
    padding-left: 0;
    padding-top: 2rem;
    border-left: none;
  }

  strong {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  span {
    font-size: 4rem;
    color: #095812;
    font-weight: 700;
  }
`;
