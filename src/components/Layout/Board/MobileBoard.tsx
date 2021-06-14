import React from 'react'
import { Route, Link, useLocation } from 'react-router-dom';

import NavButton from 'components/common/NavButton/NavButton';
import TodoList from 'components/Layout/Board/TodoList/TodoList';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import Heroes from 'components/Layout/Board/Heroes/Heroes';

const TASKS_ROUTE = '/tasks';
const COMPLETED_ROUTE = '/completed';
const HEROES_ROUTE = '/heroes';

const MobileBoard: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className='flex flex-col mb-4'>
            <div className='flex flex-wrap'>
                <Link to={TASKS_ROUTE}>
                    <NavButton title='Enemies' icon='fas fa-user' detail='(0)' active={pathname === TASKS_ROUTE} />
                </Link>
                <Link to={COMPLETED_ROUTE}>
                    <NavButton title='Chronicles' icon='fas fa-user' active={pathname === COMPLETED_ROUTE} />
                </Link>
                <Link to={HEROES_ROUTE}>
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
