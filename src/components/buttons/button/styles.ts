import styled, { css } from 'styled-components';

import { ApplicationTheme } from '../../../core/theme';

import {
  BUTTON_STYLE_VARIANTS
} from './index';

const BASE_FONT_SIZE = 0.875;

interface IStyledButtonWrapperProps {
  theme: ApplicationTheme;
  [x: string]: any;
}

export const StyledButtonWrapper = styled.button<IStyledButtonWrapperProps>`
  ${(props: IStyledButtonWrapperProps) => {

  const {
    disabled,
    hasOutline,
    isActive,
    styleVariant,
    theme,
  } = props;


  return css`
    flex-direction: row;
    align-items: center;
    font-size: ${BASE_FONT_SIZE * 0.825}rem;
    color: ${theme.palette.primary.main};
    background-color: ${theme.palette.primary.contrastText};
    height: 1.5rem;
    // margin: 0 0.25rem;
    justify-content: center;
    vertical-align: center;
    overflow: hidden;
    user-select: none;
    border-radius: 1rem;
    display: flex;
    outline: none;
    padding: 0 1em;
    cursor: pointer;

    border: none;

    transition: background-color 150ms linear, color 150ms linear;

    &:hover, &:active {
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.secondary.main};

      > svg {
        fill: ${theme.palette.secondary.main};
        stroke: ${theme.palette.secondary.main};
      }
    }

    &:link, &:visited, &:active {
      color: ${theme.palette.primary.contrastText};
    }

    ${isActive && css`
      background-color: ${theme.palette.primary.main};
      color: ${theme.palette.primary.contrastText};
      &:hover {
        color: ${theme.palette.secondary.main};
      }
    `}

    ${hasOutline && css`
      background-color: transparent;
      border: 1px solid ${theme.palette.primary.contrastText};
      color: ${theme.palette.primary.contrastText};

      &:hover {
        border: 1px solid ${theme.palette.secondary.main};
        color: ${theme.palette.secondary.main};
      }
    `}

    ${disabled && css`
      color: ${theme.palette.primary.contrastText};
      background-color: ${theme.palette.grey.A100};
      border-color: ${theme.palette.grey.A100};
      cursor: not-allowed;

      &:hover {
        color: ${theme.palette.primary.contrastText};
        background-color: ${theme.palette.grey.A100};
        border-color: ${theme.palette.grey.A100};
      }
    `}

    ${(styleVariant === BUTTON_STYLE_VARIANTS.DEFAULT) && css`
      font-size: 12px;
      letter-spacing: 0;
      // text-transform: uppercase;
      box-shadow: 1px 1px 1px #00000034;
      border-radius: 20px;
    `}

    ${(styleVariant === BUTTON_STYLE_VARIANTS.LONG) && css`
      min-width: 108px;
      height: 20px;
      font-size: 12px;
      letter-spacing: 0;
      text-transform: uppercase;
      box-shadow: 1px 1px 1px #00000034;
      border-radius: 20px;
    `}

    ${(styleVariant === BUTTON_STYLE_VARIANTS.LEGACY) && css`
      box-shadow: 1px 1px 0 1px rgba(0,0,0,0.08);
    `}
  `;
}}`;

export const StyledButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
