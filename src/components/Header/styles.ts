import styled from 'styled-components';

export const Container = styled.header`
  background: #095812;
  color: #fff;
  font-size: 1.25rem;
  padding: 0.875rem 2rem;

  display: flex;
  justify-content: space-between;
  max-width: 1300px;
  margin: 0 auto;
  align-items: center;

  strong {
    margin-left: 0.5rem;
  }

  a {
    text-decoration: none;
    color: #fff;
    margin-right: 2rem;
    font-size: 0.75rem;
    font-weight: 700;

    &.isOnThispage {
      padding: 0.4rem 1.2rem;
      background: #063a0c;
      border-radius: 10px;
    }
  }
`;
