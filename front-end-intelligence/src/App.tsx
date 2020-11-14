import React from 'react';
import { Global } from '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';

import { theme, GlobalStyle, Theme } from './styles/theme';

import Routes from './routes';

const App: React.FC = () => {
	return (
		<>
			<ThemeProvider theme={theme}>
				<Global<Theme> styles={GlobalStyle} />
				<BrowserRouter>
					<Routes />
				</BrowserRouter>
			</ThemeProvider>
		</>
	);
};

export default App;
