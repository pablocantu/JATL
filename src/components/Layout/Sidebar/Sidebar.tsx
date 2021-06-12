import React, { useContext } from 'react';

import ThemeSwitch from './ThemeSwitch/ThemeSwitch';
import Currency from 'components/common/Currency/Currency';

import { ThemeContext } from '../../ThemeProvider/ThemeProvider';
import { GlobalContext } from '../Layout';

const Sidebar: React.FC = () => {
    const { coins } = useContext(GlobalContext);
    const { theme, setTheme } = useContext(ThemeContext);

    return (
        <div className='bg-c-bg-secondary p-2 h-full flex items-center md:block'>
            <div className='flex-1 ml-2 md:ml-0'>
                <ThemeSwitch
                    theme={theme || 'light'}
                    onToggleTheme={() => setTheme && setTheme(theme === 'light' ? 'dark' : 'light')}
                />
            </div>
            <div className='mr-2 md:hidden'>
                <Currency amount={coins} />
            </div>
        </div>
    );
}

export default Sidebar;