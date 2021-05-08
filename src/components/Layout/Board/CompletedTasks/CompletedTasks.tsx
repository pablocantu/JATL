import React, { useContext } from 'react';

import ContentBox from 'components/common/ContentBox/ContentBox';

import { BoardContext } from '../Board';
import Task from 'components/common/Task/Task';

const CompletedTasks: React.FC = () => {
    const {
        todos,
        onRestoreTodo,
        onClearCompleted
    } = useContext(BoardContext);

    return (
        <ContentBox>
            <div className='flex mb-4'>
                <span className='mr-auto'>Completed</span>
                <span
                    className='text-red-700 font-bold cursor-pointer'
                    onClick={onClearCompleted}
                >Clear</span>
            </div>
            <div className='flex flex-col gap-y-2 w-full py-4'>
                {
                    todos?.filter(({ completed }) => completed)
                        .map(todo => {
                            return (
                                <Task
                                    key={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    onRestore={() => onRestoreTodo && onRestoreTodo(todo.id)}
                                />
                            );
                        })
                }
            </div>
        </ContentBox>
    );
}

export default CompletedTasks;
