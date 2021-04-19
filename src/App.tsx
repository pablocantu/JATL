import React from 'react';

import Board from 'components/Board/Board';
import ThemeProvider from 'components/ThemeButton/ThemeButton';

function App(): JSX.Element {
	return (
		<div>
			<ThemeProvider />
			<Board title='Hello Board' />
		</div>
	);
}

export default App;
