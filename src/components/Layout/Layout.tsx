import React from 'react';

import CharacterList from 'components/CharacterList/CharacterList';
import CompletedList from 'components/CompletedList/CompletedList';
import Sidebar from 'components/Sidebar/Sidebar';
import TodoList from 'components/TodoList/TodoList';

const Layout: React.FC = () => {
    return (
        <div className='flex flex-col lg:flex-row md:flex-row'>
            <div className='max-w-min'>
                <Sidebar />
            </div>
            <div className='w-9/12 mx-auto py-8'>
                <div className='grid grid-cols-12 grid-rows-2 h-full gap-4'>
                    <div className='col-span-2 row-span-2'>
                        <CharacterList />
                    </div>
                    <div className='lg:col-span-8 lg:row-span-2 md:col-span-10'>
                        <TodoList />
                    </div>
                    <div className='lg:col-span-2 lg:row-span-2 md:col-span-10'>
                        <CompletedList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout;