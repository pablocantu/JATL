import React from 'react';

import Sidebar from 'components/Layout/Sidebar/Sidebar';
import Board from './Board/Board';

const Layout: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='sticky top-0 w-full text-right md:max-w-min md:h-screen z-50'>
                <Sidebar />
            </div>
            <div className='w-11/12 sm:w-10/12 mx-auto py-8 z-40'>
                <Board />
            </div>
        </div>
    );
}

export default Layout;