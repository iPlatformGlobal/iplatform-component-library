import React, { FC } from 'react';

import { Container, Input } from './styles';

/** @Internal */
export interface IProps {
  onChange: (...args) => void;
  value: string;
}

export const SearchInput: FC<IProps> = (props) => {
  const {
    onChange,
    value,
  } = props;

  const handleSearchChange = (event) => {
    onChange(event?.target?.value || '');
  }

  return (
    <Container>
      <Input
        onChange={handleSearchChange}
        palette={'primary'}
        placeholder="search"
        title="Search for a specific template"
        value={value}
      />
    </Container>
  );
};

SearchInput.defaultProps = {
  onChange: () => {},
  value: '',
};

export default SearchInput;
