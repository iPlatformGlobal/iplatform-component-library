import React, { FC } from 'react';
import { HeaderContainer } from '../header-container';
import { SearchInput } from '../../search/search-input';

import {
  DateLabelBox,
  HeaderInner,
  HeaderOuter,
  HeaderRow,
  PrimaryText,
  SecondaryText,
  StatusBox,
} from './styles';

/** @Internal */
export interface IProps {
  onChangeSearch?: (...args) => void;
  primaryText?: string;
  primaryTextSuffix?: string;
  secondaryText?: string;
  secondaryTextSuffix?: string;
  statusBoxText?: string;
  typeBoxText?: string;
  lastEditedLabelText?: string;
  lastEditedContentText?: string;
  value?: string;
  enableSearchBar?: boolean;
  enableLastEdited?: boolean;
  minHeight?: any;
}


export const Header: FC<IProps> = (props) => {
  const {
    children,
    enableLastEdited,
    enableSearchBar,
    lastEditedContentText,
    lastEditedLabelText,
    minHeight,
    onChangeSearch,
    primaryText,
    primaryTextSuffix,
    secondaryText,
    secondaryTextSuffix,
    statusBoxText,
    typeBoxText,
    value,
  } = props;

  return (
    <HeaderContainer minHeight={minHeight}>
      <HeaderOuter>
        <HeaderInner noGrow>
          <HeaderRow padding>
            <PrimaryText>
              {primaryText}
              {!!primaryTextSuffix && (
                <span>&nbsp;|&nbsp;{primaryTextSuffix}</span>
              )}
            </PrimaryText>
            {!!secondaryText && (
              <SecondaryText>
                {secondaryText}
                {!!secondaryTextSuffix && (
                  <span>&nbsp;-&nbsp;{secondaryTextSuffix}</span>
                )}
              </SecondaryText>
            )}
          </HeaderRow>
          <HeaderRow>
            {!!statusBoxText && (
              <StatusBox>
                {statusBoxText}
              </StatusBox>
            )}
            {!!typeBoxText && (
              <StatusBox>
                {typeBoxText}
              </StatusBox>
            )}
            {!!enableLastEdited && (
              <DateLabelBox>
                <div className="primary">{lastEditedLabelText}</div>
                <div className="secondary">{lastEditedContentText}</div>
              </DateLabelBox>
            )}
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
          <HeaderInner>
            <HeaderRow buttons data-qa="buttons">
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
  primaryTextSuffix: '',
  secondaryText: '',
  secondaryTextSuffix: '',
  statusBoxText: '',
  enableLastEdited: false,
  lastEditedLabelText: 'Last Edited:',
  lastEditedContentText: '',
  onChangeSearch: () => {},
  value: '',
  enableSearchBar: false,
};

export default Header;
