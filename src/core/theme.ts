import { createMuiTheme } from '@material-ui/core';

export const theme = {
  palette: {
    primary: [
      '#3B3E44',  // 0
      '#42454A',  // 1
      '#595B60',  // 2
      '#D8D8D8',  // 3
      '#F2F2F2',  // 4
      '#fff',     // 5
      '#000',     // 6
      '#A8A9AD',  // 7
      '#282828',  // 8
      '#8ed8f8',  // 9
      '#3f586e',  // 10
      '#F70500',  // 11
      '#60839C',  // 12
      '#EAEAEA',  // 13
      '#FFD371',  // 14
      '#8b0000',  // 15
      '#d7eff4',  // 16
      '#1EA26A',  // 17
      '#1B85E2',  // 18
      '#8E299B',  // 19
      '#ff9900',  // 20
      '#ffb643',  // 21
      '#1ed916',  // 22
      '#ca80e7',  // 23
      '#a7a9ac',  // 24
      '#e6e6e6',  // 25
      '#60839C',  // 26
      '#cbd4d9',  // 27
      '#4a4a4a',  // 28
      '#D7F1FC',  // 29
    ],
    tags: ['#A8A9AD', '#ff9800', '#ffeb3b', '#2196f3', '#9c27b0', '#F44336', '#4caf50', '#D8D8D8', '#fff', '#000000', '#8ED8F8', '#3f586e', '#595B60'],
  },
  fonts: {
    primary: 'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  },
  colors: {
    buttonBlue: '#8ed8f8',
    buttonDark: '#3f586e',
    textHeadingPrimary: '#3f586e',
    textHeadingSecondary: '#60839C',
    navbarBlack: '#282828',
    lightBorderGray: '#D8D8D8',
    backgroundSectionHeading: '#CBD4D9',
    sidebarGray: '#EAEAEA',
    dashboardGray: '#EFEFEF',
  },
  constants: {
    primary: '#3f586e',
    primaryLight: 'white',
    primaryLightBlue: '#8ED8F8',
    primaryDark: '#3E566B',
    primaryDarker: '#394F63',
    secondary: '#60839C',
    background: '#EFEFEF',
    backgroundDark: '#282828',
    backgroundLight: '#F2EFEF',
    backgroundElement: '#FFFFFF',
    backgroundSection: '#CBD4D9',
    backgroundSidebar: '#EAEAEA',
    backgroundSecondaryHeading: '#E3E3E3',
    border: '#D8D8D8',
    loaderBackground: '#f3f3f3',
    loaderPrimary: '#dfe7ec',
  },
  backup: {
    primary: '#3f586e',
    secondary: '#60839C',
    background: '#EFEFEF',
    backgroundDark: '#282828',
    backgroundElement: '#FFFFFF',
    backgroundSection: '#CBD4D9',
    backgroundSidebar: '#EAEAEA',
    border: '#D8D8D8',
  },
  sizes: {
    maxWidth: '100%',
    // ...sizes,
  },
};

export type ApplicationTheme = typeof theme;

export const muiV2Theme = createMuiTheme({
  palette: {
    primary: {
      light: '#60839c',
      main: '#3f586e',
      dark: '#394F63',
      contrastText: 'white',
    },
  },
});
