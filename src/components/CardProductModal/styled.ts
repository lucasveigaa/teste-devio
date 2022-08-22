import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
  }

  img {
    margin: auto 0;
    width: 100px;
    height: fit-content;
    margin-right: 2rem;
  }

  p {
    color: #5e5e5e;
  }
`;

export const SubContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ContainerDescriptionItem = styled.div`
  width: 200px;

  strong {
    display: block;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-bottom: 1rem;
  }

  div {
    width: fit-content;

    span {
      padding: 0.1rem 1rem;
      border-top: 1px solid #095812;
      border-bottom: 1px solid #095812;
      margin: 0 -0.35rem;
      color: #095812;
    }

    button {
      border: 0;
      padding: 0.38rem 0.5rem;
      background: #095812;
      color: #fff;
      border-radius: 999px;

      &:hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }
  }
`;

export const ItemValue = styled.strong`
  margin-left: auto;
`;
