import React, { FC } from 'react';
import {
  StyledButtonWrapper,
  StyledButtonContentWrapper,
} from './styles';

export enum BUTTON_STYLE_VARIANTS {
  default,
  long,
}

interface IProps {
  onClick: (...args) => void;
  disabled?: boolean;
  isPrimary?: boolean;
  hasOutline?: boolean;
  palette?: string;
  styleVariant?: BUTTON_STYLE_VARIANTS;
}

const Button: FC<IProps> = (props) => {
  const {
    onClick,
    children,
    disabled,
    hasOutline,
    isPrimary,
    palette,
    styleVariant,
  } = props;

  return (
    <StyledButtonWrapper
      disabled={disabled}
      hasOutline={hasOutline}
      isActive={isPrimary}
      palette={palette}
      onClick={onClick}
      styleVariant={styleVariant}
    >
      <StyledButtonContentWrapper>
        {children}
      </StyledButtonContentWrapper>
    </StyledButtonWrapper>
  );
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  isPrimary: false,
  hasOutline: false,
  palette: 'primary',
};

export default Button;
