import styled, { css } from 'styled-components';
import { switchProp } from 'styled-tools';

import { Fab } from '@material-ui/core';

export const BASE_SIZE = '1' as any;

export const ButtonContainer = styled.div<any>`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: ${({ clickableText }) => clickableText ? 'pointer' : 'default'};
`;

export const ButtonText = styled.div<{ isClickable: boolean; spacing: number }>`
  font-size: 14px;
  margin-left: ${({ spacing }) => `${spacing}px`};
  color: #3f586e;
  user-select: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1 1 auto;
  height: 100%;
  ${({ isClickable }) => isClickable ? css`cursor: pointer;` : css`cursor: default`}
`;

export const DefaultFabButtonStyling = css<any>`
  background-color: ${'#8ed8f8'} !important;

  svg.inner-icon {
    fill: ${'#3f586e'} !important;
  }

  :hover {
    opacity: 0.65;
    background-color: ${'#3f586e'} !important;

    svg.inner-icon {
      fill: ${'#fff'} !important;
    }
  }
`;

export const FabButtonComponent = styled(Fab as any)<any>`
  &.child-menu-toggle-button {
    box-shadow: none !important;

    height: ${BASE_SIZE * 1.85 }rem;
    width: ${BASE_SIZE * 1.85 }rem;
    min-height: ${BASE_SIZE * 1.85}rem;
    min-width: ${BASE_SIZE * 1.85}rem;

    & svg.inner-icon {
      fill: ${'#3f586e'} !important;
      height: ${BASE_SIZE * 1.25}rem !important;
      width: ${BASE_SIZE * 1.25}rem !important;
    }

    ${switchProp('rootsection', {
      /* default */
      rootsection: css`
        ${DefaultFabButtonStyling};
      `,

      /* secondary */
      '': css`
        background-color: ${'#fff'}  !important;
        border: 1px solid ${'#3f586e'}  !important;
        color ${'#3f586e'} !important;

        :hover {
          background-color: ${'#D8D8D8'} !important;
        }
      `,
    })};

    /* Overrides */
    ${switchProp('disabled', {
      true: css`
        color: ${'#D8D8D8'} !important;
        border: 1px solid ${'#D8D8D8'} !important;
        background-color: ${'#F2F2F2'} !important;
        cursor: not-allowed !important;

        svg.inner-icon {
          fill: ${'#D8D8D8'} !important;
        }
      `,
    })};
  }
`;
