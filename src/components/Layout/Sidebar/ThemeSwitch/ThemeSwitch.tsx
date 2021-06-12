import React from 'react';

import { ReactComponent as Sun } from 'assets/svgs/Sun.svg';
import { ReactComponent as Moon } from 'assets/svgs/Moon.svg';

import { ThemeType } from 'types';

interface Props {
    theme: ThemeType,
    onToggleTheme: () => void
}

const ThemeSwitch: React.FC<Props> = ({
    theme,
    onToggleTheme
}: Props) => {
    return (
        <button
            className='flex justify-center items-center bg-c-bg-tertiary py-1 px-2 h-14 w-16 rounded-md'
            onClick={() => onToggleTheme()}
        >
            {theme === 'light' ? <Sun /> : <Moon />}
        </button>
    );
}

export default ThemeSwitch;
