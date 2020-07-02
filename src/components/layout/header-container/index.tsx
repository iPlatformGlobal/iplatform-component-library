import React, { FC } from 'react';
import { StyledHeaderContainer } from './styles';

/** @Internal */
export interface IProps {
  minHeight?: number;

  [x: string]: any;
}


export const HeaderContainer: FC<IProps> = (props) => {
  const {
    children,
    minHeight
  } = props;

  return (
    <StyledHeaderContainer minHeight={minHeight}>
      {children}
    </StyledHeaderContainer>
  );
};

HeaderContainer.defaultProps = {
  minHeight: 60,
};

export default HeaderContainer;
