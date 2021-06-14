import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import Layout from 'components/Layout/Layout';

function App(): JSX.Element {
	return (
		<Router>
			<ThemeProvider>
				<Layout />
			</ThemeProvider>
		</Router>
	);
}

export default App;
