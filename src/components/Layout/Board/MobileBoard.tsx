import React, { useContext } from 'react'
import { Route, Link, useLocation } from 'react-router-dom';

import NavButton from 'components/common/NavButton/NavButton';
import TodoList from 'components/Layout/Board/TodoList/TodoList';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import Heroes from 'components/Layout/Board/Heroes/Heroes';

import { BoardContext } from './Board';

const TASKS_ROUTE = '/tasks';
const COMPLETED_ROUTE = '/completed';
const HEROES_ROUTE = '/heroes';

const MobileBoard: React.FC = () => {
    const { pathname } = useLocation();
    const { todos } = useContext(BoardContext);
    const pendingTodos = todos?.filter(todo => !todo.completed).length;

    return (
        <div className='flex flex-col mb-4'>
            <div className='flex flex-wrap justify-evenly gap-3 mb-4'>
                <Link to={TASKS_ROUTE} className={pathname === TASKS_ROUTE ? 'flex-1' : ''}>
                    <NavButton title='Enemies' icon='fas fa-user' detail={`(${pendingTodos})`} active={pathname === TASKS_ROUTE} />
                </Link>
                <Link to={COMPLETED_ROUTE} className={pathname === COMPLETED_ROUTE ? 'flex-1' : ''}>
                    <NavButton title='Chronicles' icon='fas fa-user' active={pathname === COMPLETED_ROUTE} />
                </Link>
                <Link to={HEROES_ROUTE} className={pathname === HEROES_ROUTE ? 'flex-1' : ''}>
                    <NavButton title='Heroes' icon='fas fa-user' active={pathname === HEROES_ROUTE} />
                </Link>
            </div>
            <Route path={TASKS_ROUTE} component={TodoList} />
            <Route path={COMPLETED_ROUTE} component={CompletedTasks} />
            <Route path={HEROES_ROUTE} component={Heroes} />
        </div>
    );
}

export default MobileBoard;
