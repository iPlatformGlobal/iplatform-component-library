import styled, { css } from 'styled-components';
import { FC } from 'react';

interface ICanvasProps {
  selectable: boolean;
}

export const Canvas: FC<ICanvasProps> = styled.div<ICanvasProps>`
    margin: 10px;
    ${({ selectable = true }) => !selectable ? css`user-select: none;` : ''}
`;

export const Heading = styled.h2`
    margin: 5px 0;
    font-weight: 200;
`;

export const Description = styled.p`
    margin: 10px 0;
`;

export const Content = styled.div<{noMargin?: boolean}>`
    ${(props) => {
      const noMargin = !!props.noMargin;
      return css`
        margin: ${noMargin ? '0' : '15px 0 50px 0'};
      `
    }};
`;
