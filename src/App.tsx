import React from 'react';

import Board from 'components/Board/Board';
import ThemeProvider from 'components/contexts/ThemeProvider/ThemeProvider';

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<Board title='Hello Board' />
		</ThemeProvider>
	);
}

export default App;
