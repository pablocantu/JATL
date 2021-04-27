import React from 'react';

import CharacterList from 'components/CharacterList/CharacterList';
import CompletedList from 'components/CompletedList/CompletedList';
import Sidebar from 'components/Sidebar/Sidebar';
import TodoList from 'components/TodoList/TodoList';

const Layout: React.FC = () => {
    return (
        <div className='flex flex-col md:flex-row'>
            <div className='sticky max-h-min w-full text-right md:max-w-min md:h-screen'>
                <Sidebar />
            </div>
            <div className='w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-8'>
                <div className='grid grid-cols-12 md:grid-rows-2 h-full gap-4'>
                    <div className='col-span-12 md:col-span-2 md:row-span-2'>
                        <CharacterList />
                    </div>
                    <div className='col-span-12 md:col-span-10 lg:row-span-2 lg:col-span-8'>
                        <TodoList />
                    </div>
                    <div className='col-span-12 md:col-span-10 lg:col-span-2 lg:row-span-2'>
                        <CompletedList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;