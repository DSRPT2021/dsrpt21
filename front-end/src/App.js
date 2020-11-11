import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import Routes from './routes';

import { theme, GlobalStyle } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
