import styled from 'styled-components';

export const TextStrong = styled.strong`
  display: block;
  margin-top: 2rem;
  margin-bottom: 0.5rem;
`;

export const ExplicationText = styled.span`
  color: #5e5e5e;
  font-size: 0.875rem;
`;

export const TextAreaObservations = styled.textarea`
  resize: none;
  width: 100%;
  height: 100px;
  padding: 1rem;
  border: 0;
  background: #f4f1f1;
  border-radius: 5px;

  &::placeholder {
    color: a2a2a2;
  }
`;

export const ContainerFinalizingOrder = styled.div`
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 5px;
  border: 1px solid #acacac;
`;

export const SubContainerFinalizingOrder = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px dotted #acacac;
  padding-bottom: 3rem;
`;

export const ContainerTotalAmount = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  strong {
    padding-top: 1rem;
    font-size: 1.5rem;
  }
`;
