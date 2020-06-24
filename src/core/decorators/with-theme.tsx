import React from "react"
import styled, { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider, StylesProvider } from '@material-ui/core'
import { CssBaseline } from '@material-ui/core';
import { theme } from '../theme';

const StyledStoryContainer = styled.div`
  margin: 5px;
`;


const withTheme = (storyFn) => (
  <CssBaseline>
    <StylesProvider injectFirst>
      <MuiThemeProvider
        theme={theme}
      >
        <ThemeProvider
          theme={theme}
        >
          <StyledStoryContainer>
            {storyFn()}
          </StyledStoryContainer>
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </CssBaseline>
);

export default withTheme;
