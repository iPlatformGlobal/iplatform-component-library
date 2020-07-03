import styled, { css } from 'styled-components';

/** @Internal */
export interface IHeaderContainerProps {
  minHeight?: number;
}

export const StyledHeaderContainer = styled.div<IHeaderContainerProps>`
  background-color: white;
  border-bottom: solid 0.01rem #D8D8D8;
  box-shadow: 0 3px 5px 0 rgba(0,0,0,0.08);
  color: #3f586e;
  display: flex;
  flex-direction: column;
  z-index: 2;
  
  ${props => props.minHeight && css`
    min-height: ${props.minHeight}px;
  `}
`;


