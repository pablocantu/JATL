import React from 'react';

import ThemeProvider from 'components/contexts/ThemeProvider/ThemeProvider';
import Layout from 'components/Layout/Layout';

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<Layout />
		</ThemeProvider>
	);
}

export default App;
