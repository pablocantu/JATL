import React, { useContext } from 'react';

import ThemeSwitch from './ThemeSwitch/ThemeSwitch';

import { ThemeContext } from '../../ThemeProvider/ThemeProvider';

const Sidebar: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='bg-c-bg-secondary p-2 h-full'>
            <ThemeSwitch
                theme={theme || 'light'}
                onToggleTheme={() => setTheme && setTheme(theme === 'light' ? 'dark' : 'light')}
            />
        </div>
    );
}

export default Sidebar;