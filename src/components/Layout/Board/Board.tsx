import React, { createContext, useState } from 'react';

import Characters from 'components/Layout/Board/Characters/Characters';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import TodoList from 'components/Layout/Board/TodoList/TodoList';

import { Todo } from './TodoList/models';

interface ContextProps {
    todos: Todo[],
    onAddTodo: (todo: Todo) => void,
    onCheckTodo: (id: string) => void,
    onRemoveTodo: (id: string) => void,
    onRestoreTodo: (id: string) => void,
    onClearCompleted: () => void
}

export const BoardContext = createContext<Partial<ContextProps>>({});

const Board: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    const updateTodoCompletion = (id: string, completed: boolean): Todo[] => {
        return todos.map(todo => {
            if (todo.id !== id) return todo;
            return { ...todo, completed };
        });
    }

    const onAddTodo = (todo: Todo) => {
        setTodos([...todos, { ...todo }]);
    }

    const onCheckTodo = (id: string) => {
        setTodos(updateTodoCompletion(id, true));
    }

    const onRemoveTodo = (id: string) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }

    const onRestoreTodo = (id: string) => {
        setTodos(updateTodoCompletion(id, false));
    }

    const onClearCompleted = () => {
        setTodos(todos.filter(({ completed }) => !completed));
    }

    return (
        <BoardContext.Provider value={{
            todos,
            onAddTodo,
            onCheckTodo,
            onRemoveTodo,
            onRestoreTodo,
            onClearCompleted
        }}>
            <div className='w-11/12 sm:w-10/12 mx-auto py-8'>
                <div className='grid grid-cols-12 md:grid-rows-2 h-full gap-4'>
                    <div className='col-span-12 md:col-span-2 md:row-span-2'>
                        <Characters />
                    </div>
                    <div className='col-span-12 md:col-span-10 xl:col-span-6'>
                        <TodoList />
                    </div>
                    <div className='col-span-12 md:col-span-10 xl:col-span-4'>
                        <CompletedTasks />
                    </div>
                </div>
            </div>
        </BoardContext.Provider>
    );
}

export default Board;