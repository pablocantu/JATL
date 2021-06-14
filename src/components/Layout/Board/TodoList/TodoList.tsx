import React, { useState, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContentBox from 'components/common/ContentBox/ContentBox';
import Input from 'components/common/Input/Input';
import Task from 'components/common/Task/Task';
import Currency from 'components/common/Currency/Currency';
import Character from 'components/common/Character/Character';
import KillCounter from 'components/common/KillCounter/KillCounter';

import cp from 'utils/classParser';
import { BoardContext } from '../Board';
import { GlobalContext } from 'components/Layout/Layout';

const TodoList: React.FC = () => {
    const { coins } = useContext(GlobalContext);

    const {
        hero,
        todos,
        onAddTodo,
        onCheckTodo,
        onRemoveTodo,
        onRestoreTodo
    } = useContext(BoardContext);

    const [taskTitle, setTaskTitle] = useState<string>('');

    const onAddNewTodo = (task?: string) => {
        if (task) {
            onAddTodo && onAddTodo({
                id: uuidv4(),
                title: task[0].toUpperCase() + task.slice(1),
                completed: false
            });

            setTaskTitle('');
        }
    }

    return (
        <div className='d-flex flex-col'>
            {/* TodoList header for Desktop screens */}
            <div className={cp(`
                hidden
                md:flex justify-between w-full mb-4
            `)}>
                <span className='font-bold'>To-Dos of the Day</span>
                <Currency amount={coins} />
            </div>
            {/* TodoList header for Mobile screens */}
            <div className={cp(`
                mt-5 mb-4 
                flex justify-center items-center gap-2
                md:hidden
            `)}>
                <Character
                    name={hero.name}
                    src={hero.src}
                    bgColor={hero.color}
                    height='h-16'
                    width='h-16'
                />
                <div className='flex flex-col'>
                    <span className='font-bold text-c-text text-lg'>{hero.name}</span>
                    <KillCounter count={0} />
                </div>
            </div>
            <ContentBox>
                <div className='flex flex-row items-end gap-x-4 w-full'>
                    <div className='flex-grow'>
                        <Input
                            value={taskTitle}
                            type='text'
                            placeholder={taskTitle ? 'Awesome! Lets get to it!' : 'What\'s on your mind?'}
                            onChange={({ target: { value } }) => setTaskTitle(value)}
                            onKeyUp={({ key }) => {
                                if (key == 'Enter' || Number(key) == 13) {
                                    onAddNewTodo(taskTitle);
                                }
                            }}
                        />
                    </div>
                    <button
                        className='bg-c-primary rounded-md py-2 px-4 text-white font-bold font-size text-lg'
                        onClick={() => onAddNewTodo(taskTitle)}
                    >
                        +
                    </button>
                </div>
                <div className='flex flex-col gap-y-2 w-full py-4'>
                    {
                        todos?.filter(todo => !todo.completed)
                            .map(todo => {
                                return <Task
                                    addClass='flex-grow'
                                    key={todo.id}
                                    title={todo.title}
                                    completed={todo.completed}
                                    onComplete={() => onCheckTodo && onCheckTodo(todo.id)}
                                    onDelete={() => onRemoveTodo && onRemoveTodo(todo.id)}
                                    onRestore={() => onRestoreTodo && onRestoreTodo(todo.id)}
                                />;
                            })
                    }
                </div>
            </ContentBox>
        </div>
    );
}

export default TodoList;
