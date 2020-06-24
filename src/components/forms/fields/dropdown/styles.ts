import styled from 'styled-components';
import { Autocomplete as MuiAutocomplete } from '@material-ui/lab';


export const Autocomplete = styled(MuiAutocomplete)<any>`
  .MuiAutocomplete-inputRoot[class*="MuiInput-root"] .MuiAutocomplete-input:first-child {
    height: 14px;
    font-size: 14px;
    font-weight: 500;
    padding: 3px 0;
  }
`;
