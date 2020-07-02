import styled, { css } from 'styled-components';
import { FC } from 'react';
import { useMixin } from '../../utils/use-mixin';

interface ICanvasProps {
  selectable?: boolean;
  styleVariant?: 'default' | 'contrast';
  minHeight?: number;
}

export const Canvas: FC<ICanvasProps> = styled.div<ICanvasProps>`
  ${useMixin('styleVariant', 'contrast', css`
    padding: 15px;
    background-color: rgb(250,250,250);
  `)}
`;

Canvas.defaultProps = {
  selectable: false,
  styleVariant: 'default',
}

export const Heading = styled.h2`
    margin: 5px 0;
    font-weight: 200;
    font-family: sans-serif;
`;

export const Description = styled.p`
    margin: 10px 0;
    font-family: sans-serif;
`;

export const Content = styled.div<{noMargin?: boolean}>`
    ${(props) => {
      const noMargin = !!props.noMargin;
      return css`
        margin: ${noMargin ? '0' : '15px 0 50px 0'};
      `
    }};
`;
