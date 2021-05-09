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
                <div className='grid grid-cols-12 h-full gap-5'>
                    <div className='col-span-12 md:col-span-2 md:row-span-1'>
                        <Characters />
                    </div>
                    <div className='col-span-12 md:col-span-10'>
                        <div className='flex flex-col xl:flex-row gap-5'>
                            <div className='w-full'>
                                <TodoList />
                            </div>
                            <div className='w-full xl:w-5/12'>
                                <CompletedTasks />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BoardContext.Provider>
    );
}

export default Board;