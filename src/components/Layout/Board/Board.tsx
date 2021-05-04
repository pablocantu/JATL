import React, { createContext, useState } from 'react';

import Characters from 'components/Layout/Board/Characters/Characters';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import TodoList from 'components/Layout/Board/TodoList/TodoList';

import { Todo } from './TodoList/models';

interface ContextProps {
    todos: Todo[],
    onAddTodo: (todo: Todo) => void,
    onCheckTodo: (id: string) => void
}

export const BoardContext = createContext<Partial<ContextProps>>({});

const Board: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const onAddTodo = (todo: Todo) => {
        setTodos([...todos, { ...todo }]);
    }

    const onCheckTodo = (id: string) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) return { ...todo, completed: true };
            return todo;
        }));
    }

    return (
        <BoardContext.Provider value={{ todos, onAddTodo, onCheckTodo }}>
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
        </BoardContext.Provider>
    );
}

export default Board;