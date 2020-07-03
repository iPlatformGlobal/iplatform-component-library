import styled from 'styled-components';

const BASE_SIZE = 1;
const PADDING = 0.5;

export const Container = styled.div`
  display: flex;
  flex: 1 1 auto;
  padding: 0 ${PADDING * 2}rem;
  font-family: Roboto, sans-serif;
  align-self: center;
`;

export const Input = styled.input<any>`
  border: ${BASE_SIZE * 0.08}rem solid #D8D8D8;
  border-radius: ${BASE_SIZE * 0.25}rem;
  flex: 1;
  height: ${BASE_SIZE * 2}rem;
  padding-left: ${PADDING * 2}rem;
  transition: outline 0.5s ease;
  font-family: Roboto, sans-serif;
  font-size: 100%;

  &:focus {
    background-color: #D7F1FC;
    border: ${BASE_SIZE * 0.08}rem solid #8ed8f8 !important;
    outline: none;
  }
`;
