import React, { FC } from 'react';
import { HeaderContainer } from '../header-container';
import {
  HeaderInner,
  HeaderRow,
  PrimaryText,
  HeaderOuter,
} from './styles';

/** @Internal */
export interface IProps {
  minHeight?: number;
  primaryText?: string;
  primarySubText?: string;

  [x: string]: any;
}


export const Header: FC<IProps> = (props) => {
  const {
    children,
    minHeight,
    primarySubText,
    primaryText,
  } = props;

  return (
    <HeaderContainer minHeight={minHeight}>
      <HeaderOuter>
        <HeaderInner>
          <HeaderRow>
            <PrimaryText>
              {primaryText}
            </PrimaryText>
          </HeaderRow>
          <HeaderRow>
            {primarySubText}
          </HeaderRow>
        </HeaderInner>
        <HeaderInner>
          <HeaderRow>
            Some random element that has a really long description
          </HeaderRow>
        </HeaderInner>
      </HeaderOuter>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  minHeight: 60,
  primaryText: 'Product Catalogue',
  primarySubText: 'A description would go here'
};

export default Header;
