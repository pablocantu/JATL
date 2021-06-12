import React, { createContext, useState, useEffect } from 'react';

import Heroes from 'components/Layout/Board/Heroes/Heroes';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import TodoList from 'components/Layout/Board/TodoList/TodoList';

import ContextProps from './models/BoardContext';
import availableHeroes from './Heroes/config/heroes';
import Todo from 'models/Todo';
import Hero from 'models/Hero';

export const BoardContext = createContext<ContextProps | Record<string, never>>({});

const Board: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [hero, setHero] = useState<Hero>(availableHeroes[0]);
    const [heroes, setHeroes] = useState<Hero[]>(availableHeroes.sort((a, b) => a.cost - b.cost));
    const [coins, setCoins] = useState<number>(0);

    useEffect(() => {
        setHero(heroes.filter(({ selected }) => selected)[0])
    }, [heroes]);

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
        setCoins(coins + 10);
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

    const onSelectHero = (chosen: Hero) => {
        if (chosen.unlocked) {
            setHeroes(heroes
                .map(hero => hero.id === chosen.id ?
                    { ...hero, selected: true } : { ...hero, selected: false })
            );
        }
    }

    const onUnlockHero = (chosen: Hero) => {
        if (coins >= chosen.cost) {
            setCoins(coins - chosen.cost);
            setHeroes(heroes
                .map(hero => hero.id === chosen.id ? { ...hero, unlocked: true } : hero)
            );
        }
    }

    return (
        <BoardContext.Provider value={{
            todos,
            heroes,
            hero,
            coins,
            onAddTodo,
            onCheckTodo,
            onRemoveTodo,
            onRestoreTodo,
            onClearCompleted,
            onSelectHero,
            onUnlockHero
        }}>
            <div className='grid grid-cols-12 h-full gap-5'>
                <div className='col-span-12 px-4 min-w-min lg:col-span-2 lg:row-span-1'>
                    <Heroes />
                </div>
                <div className='col-span-12 lg:col-span-10'>
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
        </BoardContext.Provider>
    );
}

export default Board;