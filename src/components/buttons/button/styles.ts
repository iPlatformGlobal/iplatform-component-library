import styled, { css } from 'styled-components';
import { theme as themeConfig } from '../../../core/theme';
import { BUTTON_STYLE_VARIANTS } from './';

const BASE_FONT_SIZE = 0.875;

interface IStyledButtonWrapperProps {
  theme: typeof themeConfig;
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

    return css<any>`
      flex: 0 1 auto;
      font-size: ${BASE_FONT_SIZE * 0.825}rem;
      box-shadow: 1px 1px 0 1px rgba(0,0,0,0.08);
      color: ${theme.constants.primary};
      background-color: ${theme.constants.primaryLight};
      height: 1.5rem;
      margin: 0 0.25rem;
      justify-content: center;
      vertical-align: center;
      overflow: hidden;
      user-select: none;
      border-radius: 1 rem;
      display: flex;
      outline: none;
      padding: 0 1 em;
      cursor: pointer;

      transition: background-color 150ms linear, color 150ms linear;

      &:hover, &:active {
        background-color: ${theme.constants.primary};
        color: ${theme.constants.primaryLightBlue};

        > svg {
          fill: ${theme.constants.primaryLightBlue};
          stroke: ${theme.constants.primaryLightBlue};
        }
      }

      &:link, &:visited, &:active {
        color: ${theme.constants.primaryLight};
      }

      ${isActive && css`
        background-color: ${theme.constants.primary};
        color: ${theme.constants.primaryLight};
        &:hover {
          color: ${theme.constants.primaryLightBlue};
        }
      `}

      ${hasOutline && css`
        background-color: transparent;
        border: 1px solid ${theme.constants.primaryLight};
        color: ${theme.constants.primaryLight};

        &:hover {
          border: 1px solid ${theme.constants.primaryLightBlue};
          color: ${theme.constants.primaryLightBlue};
        }
      `}

      ${disabled && css`
        color: ${theme.constants.primaryLight};
        background-color: ${theme.constants.border};
        border-color: ${theme.constants.border};
        cursor: not-allowed;

        &:hover {
          color: ${theme.constants.primaryLight};
          background-color: ${theme.constants.border};
          border-color: ${theme.constants.border};
        }
      `}

      ${(styleVariant === BUTTON_STYLE_VARIANTS.long) && css`
        min-width: 108px;
        //height: 20px;
        font-size: 12px;
        letter-spacing: 0;
        text-transform: uppercase;
        box-shadow: 1px 1px 1px #00000034;
        border-radius: 20px;
      `};
    `;
  }}
`;

export const StyledButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
