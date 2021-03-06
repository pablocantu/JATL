import React, { createContext, useState, useEffect, useContext } from 'react';

import DesktopBoard from './DesktopBoard';
import MobileBoard from './MobileBoard';

import { GlobalContext } from '../Layout';
import ContextProps from './BoardContext';
import availableHeroes from 'config/heroesList';
import Todo from 'models/Todo';
import Hero from 'models/Hero';

export const BoardContext = createContext<ContextProps | Record<string, never>>({});

const Board: React.FC = () => {
    const {
        coins,
        onEarnCoins,
        onRemoveCoins,
        onKillEnemy
    } = useContext(GlobalContext);

    const [todos, setTodos] = useState<Todo[]>([]);
    const [hero, setHero] = useState<Hero>(availableHeroes[0]);
    const [heroes, setHeroes] = useState<Hero[]>(availableHeroes.sort((a, b) => a.cost - b.cost));

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
        onEarnCoins(10);
        onKillEnemy();
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
            onRemoveCoins(chosen.cost);
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
            onAddTodo,
            onCheckTodo,
            onRemoveTodo,
            onRestoreTodo,
            onClearCompleted,
            onSelectHero,
            onUnlockHero
        }}>
            <div className='hidden md:block'>
                <DesktopBoard />
            </div>
            <div className='md:hidden'>
                <MobileBoard />
            </div>
        </BoardContext.Provider>
    );
}

export default Board;