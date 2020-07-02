import styled, { css } from 'styled-components';
import { useMixin } from '../../../utils/use-mixin';

export const HeaderOuter = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: row;
  overflow: hidden;
  padding-left: 28px;
  
  & div {
    //border: 1px solid black;
  }
`

export const HeaderInner = styled.div<{
  noGrow?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  
  ${useMixin('noGrow', true, css`
    flex-grow: 0;
  `)}
`;

export const HeaderRow = styled.div<any>`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex: 1 1 auto;
  
  ${useMixin('centered', true, css`
    justify-content: center;
  `)}
  
  ${useMixin('buttons', true, css`
    justify-self: flex-end;
    align-items: center;
    padding-right: 28px;
  `)}
`;

export const PrimaryText = styled.h1`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  font-size: 20px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  align-self: flex-end;
`;

export const PrimarySubText = styled.p`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  //font-size: 20px;
  font-family: Roboto, sans-serif;
  //font-weight: 500;
  align-self: flex-start;
`;

export const SecondaryText = styled.p`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  font-size: 12px;
  font-family: Roboto, sans-serif;
  //font-weight: 500;
  align-self: flex-end;
  padding-bottom: 3px;
  text-transform: uppercase;
`;
