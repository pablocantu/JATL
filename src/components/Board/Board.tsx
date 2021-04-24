import React, { useContext } from 'react';

import { ThemeContext } from 'components/contexts/ThemeProvider/ThemeProvider';
interface Props {
    title: string;
}

const Board: React.FC<Props> = ({ title }: Props) => {
    const {
        preferedTheme,
        setPreferedTheme
    } = useContext(ThemeContext);

    return (
        <div>
            <div>Prefered Theme: {preferedTheme}</div>
            <button
                style={{ width: '72px', backgroundColor: 'red' }}
                onClick={() => {
                    if (setPreferedTheme) setPreferedTheme(preferedTheme == 'light' ? 'dark' : 'light');
                }}
            >
                hello
            </button>
            <div className='w-4/5 m-auto grid lg:grid-cols-3 md:grid-cols-2 ms:grid-cols-1'>
                <div className='bg-indigo-300 dark:bg-gray-700 hidden sm:block'>col 1</div>
                <div className='bg-indigo-500'>col 2</div>
                <div className='bg-indigo-700'>col 3</div>
            </div>
        </div>
    );
}

export default Board;