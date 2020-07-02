import React, { FC } from 'react';
import { HeaderContainer } from '../header-container';
import { SearchInput } from '../../search/search-input';

import {
  HeaderInner,
  HeaderRow,
  PrimaryText,
  HeaderOuter,
  SecondaryText,
  PrimarySubText,
} from './styles';

/** @Internal */
export interface IProps {
  primaryText?: string;
  primarySubText?: string;
  secondaryText?: string;
  onChangeSearch?: (...args) => void;
  value?: string;

  enableSearchBar?: boolean;

  [x: string]: any;
}


export const Header: FC<IProps> = (props) => {
  const {
    enableSearchBar,
    minHeight,
    onChangeSearch,
    primarySubText,
    primaryText,
    secondaryText,
    value,
    children,
  } = props;

  return (
    <HeaderContainer minHeight={minHeight}>
      <HeaderOuter>
        <HeaderInner noGrow>
          <HeaderRow>
            <PrimaryText>
              {primaryText}
            </PrimaryText>
            {!!secondaryText && (
              <SecondaryText>
                {secondaryText}
              </SecondaryText>
            )}
          </HeaderRow>
          <HeaderRow>
            <PrimarySubText>
              {primarySubText}
            </PrimarySubText>
          </HeaderRow>
        </HeaderInner>
        {enableSearchBar && (
          <HeaderInner>
            <HeaderRow centered>
              <SearchInput
                value={value ? value : ''}
                onChange={onChangeSearch ? onChangeSearch : () => {}}
              />
            </HeaderRow>
          </HeaderInner>
        )}
        {!!children && (
          <HeaderInner noGrow>
            <HeaderRow buttons>
              {children}
            </HeaderRow>
          </HeaderInner>
        )}
      </HeaderOuter>
    </HeaderContainer>
  );
};

Header.defaultProps = {
  primaryText: '',
  primarySubText: '',
  secondaryText: '',
  onChangeSearch: () => {},
  value: '',
  enableSearchBar: false,
};

export default Header;
