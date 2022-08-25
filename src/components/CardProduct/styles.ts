import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 180px;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
  padding-bottom: 1rem;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 150px;
  }

  img {
    z-index: 1;
    height: 120px;
    max-width: 100px;
  }

  span {
    font-size: 0.75rem;
    text-align: center;
    margin-top: 0.2rem;
    margin-bottom: 1rem;
    max-width: 90%;
  }

  strong {
    font-size: 0.875rem;
  }
`;

interface TypeBackgroundColor {
  index: number;
}

export const BackgroundColor = styled.div<TypeBackgroundColor>`
  position: absolute;
  height: 70px;
  width: 180px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;

  background: ${props => props.index <= 3 && '#E12E2B'};
  background: ${props => props.index > 3 && props.index <= 7 && '#328509'};
  background: ${props => props.index > 7 && props.index <= 11 && '#FEE033'};

  @media (max-width: 700px) {
    width: 150px;
  }
`;
