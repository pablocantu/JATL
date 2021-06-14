import React from 'react';

import Heroes from 'components/Layout/Board/Heroes/Heroes';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import DesktopTodos from 'components/Layout/Board/TodoList/DesktopTodos';

const DesktopBoard: React.FC = () => {
    return (
        <div className='grid grid-cols-12 h-full gap-5'>
            <div className='col-span-12 px-4 min-w-min lg:col-span-2 lg:row-span-1'>
                <Heroes />
            </div>
            <div className='col-span-12 lg:col-span-10'>
                <div className='flex flex-col xl:flex-row gap-5'>
                    <div className='w-full'>
                        <DesktopTodos />
                    </div>
                    <div className='w-full xl:w-5/12'>
                        <CompletedTasks />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DesktopBoard;
