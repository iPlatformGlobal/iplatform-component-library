import styled, { css } from 'styled-components';
import { useMixin } from '../../../utils/use-mixin';

export const HeaderOuter = styled.div`
  display: flex;
  flex: 1 0 100%;
  flex-direction: row;
  overflow: hidden;
  padding: 7px 28px;
  
  & div {
    //border: 1px solid black;
  }
`

export const HeaderInner = styled.div<{
  noGrow?: boolean;
  placeRight?: boolean;
}>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  
  ${useMixin('noGrow', true, css`
    flex-grow: 0;
  `)}
  
  ${useMixin('placeRight', true, css`
    justify-self: flex-end;
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
    display: flex;
    justify-content: flex-end;
    flex-grow: 0;
  `)}
  
  ${useMixin('padding', true, css`
    margin: 4px 0;
  `)}
`;

export const PrimaryText = styled.h1`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  font-size: 16px;
  font-family: Roboto, sans-serif;
  font-weight: 500;
  align-self: flex-end;
`;

export const SecondaryText = styled.p`
  margin: 0;
  padding: 0;
  color: #3f586e;
  margin-right: 16px;
  font-size: 14px;
  font-family: Roboto, sans-serif;
  //font-weight: 500;
  align-self: flex-end;
  padding-bottom: 0px;
  text-transform: uppercase;
  text-overflow: ellipsis;
  text-wrap: none;
  white-space: nowrap;
`;


export const StatusBox = styled.div`
  font-size: 11px;
  margin: 0 8px 0 0;
  border: 1px solid rgb(216, 216, 216);
  color: rgb(96, 131, 156);
  display: flex;
  align-content: center;
  align-items: center;
  padding: 1px 3px;
`;

export const DateLabelBox = styled.div`${(props) => {
  return css`
    display: flex;
    flex-direction: row;
    font-size: 11px;
    align-items: center;
    
    .primary {
      margin-right: 5px;
    }
    
    .secondary {
      font-weight: 500;
    }
  `;
}}`;

export const TypeBox = styled.div`${(props) => {
  const primaryColor = props?.theme?.palette?.primary?.main;
  const secondaryColor = props?.theme?.palette?.secondary?.main;
  return css`
    font-size: 11px;
    margin: 0 8px 0 0;
    border: 1px solid ${primaryColor};
    color: ${primaryColor};
    background-color: ${secondaryColor};
    display: flex;
    align-content: center;
    align-items: center;
    padding: 1px 3px;
  `;
}}`
