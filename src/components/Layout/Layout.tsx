import React from 'react';

import Sidebar from 'components/Layout/Sidebar/Sidebar';
import Board from './Board/Board';

const Layout: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='sticky max-h-min w-full text-right md:max-w-min md:h-screen'>
                <Sidebar />
            </div>
            <Board />
        </div>
    );
}

export default Layout;