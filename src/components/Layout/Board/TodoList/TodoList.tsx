import React, { useState, useEffect } from 'react';

import Input from 'components/common/Input/Input';

const TodoList: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState<string[]>([]);

    useEffect(() => {
        setNewTodo('');
    }, [todos]);

    const onAddNewTodo = () => {
        if (newTodo) {
            setTodos([...todos, newTodo[0].toUpperCase() + newTodo.slice(1)]);
        }
    }

    return (
        <div className='p-8 bg-c-bg-secondary rounded-md'>
            <div className='flex flex-row items-end gap-x-4 w-full'>
                <div className='flex-grow'>
                    <Input
                        value={newTodo}
                        type='text'
                        placeholder={newTodo ? 'Awesome! Lets get to it!' : 'What\'s on your mind?'}
                        onChange={({ target: { value } }) => setNewTodo(value)}
                        onKeyUp={({ key }) => {
                            if (key == 'Enter' || Number(key) == 13) {
                                onAddNewTodo();
                            }
                        }}
                    />
                </div>
                <button
                    className='bg-c-primary rounded-md py-2 px-4 text-white font-bold font-size text-lg'
                    onClick={onAddNewTodo}
                >
                    +
                </button>
            </div>
            <div>
                {
                    todos.map(todo => {
                        return <div key={todo}>{todo}</div>;
                    })
                }
            </div>
        </div>
    );
}

export default TodoList;
