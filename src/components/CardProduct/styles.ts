import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding-bottom: 1rem;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 150px;
  }

  img {
    z-index: 9999;
    height: 120px;
    max-width: 100px;
  }

  span {
    font-size: 0.75rem;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
  }

  strong {
    font-size: 0.875rem;
  }
`;

export const BackgroundColor = styled.div`
  position: absolute;
  background: red;
  height: 70px;
  width: 180px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  @media (max-width: 700px) {
    width: 150px;
  }
`;
