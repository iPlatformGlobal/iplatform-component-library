import styled, { css } from 'styled-components';

export const HeaderOuter = styled.div`
display: flex;
flex: 1 0 100%;
flex-direction: row;
`

export const HeaderInner = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  padding: 0 28px;
`;

export const HeaderRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 0 1 auto;
`;

export const PrimaryText = styled.h1`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
`;
