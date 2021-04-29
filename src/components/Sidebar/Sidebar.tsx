import React, { useContext } from 'react';

import { ThemeContext } from '../ThemeProvider/ThemeProvider';

const Sidebar: React.FC = () => {
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='bg-c-bg-secondary p-6 h-full'>
            <button
                onClick={() => {
                    if (setTheme) {
                        setTheme(theme === 'light' ? 'dark' : 'light')
                    }
                }}
            >Theme</button>
        </div>
    );
}

export default Sidebar;