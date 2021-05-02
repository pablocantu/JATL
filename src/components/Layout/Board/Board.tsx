import React, { createContext } from 'react';

import Characters from 'components/Layout/Board/Characters/Characters';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import TodoList from 'components/Layout/Board/TodoList/TodoList';

export const BoardContext = createContext({});

const Board: React.FC = () => {
    return (
        <div className='w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 mx-auto py-8'>
            <div className='grid grid-cols-12 md:grid-rows-2 h-full gap-4'>
                <div className='col-span-12 md:col-span-2 md:row-span-2'>
                    <Characters />
                </div>
                <div className='col-span-12 md:col-span-10 lg:row-span-2 lg:col-span-8'>
                    <TodoList />
                </div>
                <div className='col-span-12 md:col-span-10 lg:col-span-2 lg:row-span-2'>
                    <CompletedTasks />
                </div>
            </div>
        </div>
    );
}

export default Board;