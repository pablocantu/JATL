import React, { useState } from 'react';

import Input from 'components/common/Input/Input';

const TodoList: React.FC = () => {
    const [newTodo, setNewTodo] = useState('');

    return (
        <div className='p-8 bg-c-bg-secondary rounded-md'>
            <div className='flex flex-row items-end gap-x-4 w-full'>
                <div className='flex-grow'>
                    <Input
                        value={newTodo}
                        placeholder={newTodo ? 'Awesome! Lets get to it!' : 'What\'s on your mind?'}
                        onChange={({ target: { value } }) => setNewTodo(value)}
                    />
                </div>
                <button className='bg-c-primary rounded-md py-2 px-4 text-white font-bold font-size text-lg'>+</button>
            </div>
            <div>

            </div>
        </div>
    );
}

export default TodoList;
