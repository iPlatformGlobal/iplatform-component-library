import React from "react"
import styled, { ThemeProvider } from 'styled-components';

// import 'normalize.css';

import { theme } from '../theme';
import { StyledWrapperReset } from "../reset-ipf-2";

const StyledStoryContainer = styled.div`
  margin: 5px;
`;


const withTheme = (storyFn) => (
  <StyledWrapperReset>
    <ThemeProvider 
      theme={theme}
    >
      <StyledStoryContainer>
        { storyFn() }
      </StyledStoryContainer>
    </ThemeProvider>
  </StyledWrapperReset>
);

export default withTheme;
