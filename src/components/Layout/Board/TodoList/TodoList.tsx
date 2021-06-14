import React, { useState, useContext, Fragment } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Input from 'components/common/Input/Input';
import Task from 'components/common/Task/Task';

import { BoardContext } from '../Board';

const TodoList: React.FC = () => {

    const {
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
        <Fragment>
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
        </Fragment>
    );
}

export default TodoList;
