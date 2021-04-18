import Board from 'components/Board/Board';
import ThemeProvider from 'components/ThemeProvider/ThemeProvider';
import React from 'react';

function App(): JSX.Element {
	return (
		<ThemeProvider>
			<Board title='Hello Board' />
		</ThemeProvider>
	);
}

export default App;
