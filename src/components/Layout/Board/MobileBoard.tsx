import React, { useContext, useEffect } from 'react'
import { Route, NavLink, useLocation, useHistory } from 'react-router-dom';

import NavButton from 'components/common/NavButton/NavButton';
import TodoList from 'components/Layout/Board/TodoList/TodoList';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import Heroes from 'components/Layout/Board/Heroes/Heroes';

import { BoardContext } from './Board';

import heroesIcon from 'assets/images/flag.png';
import tasksIcon from 'assets/images/goblin.png';
import completedIcon from 'assets/images/chronicles.png';

const TASKS_ROUTE = '/tasks';
const COMPLETED_ROUTE = '/completed';
const HEROES_ROUTE = '/heroes';

const MobileBoard: React.FC = () => {
    const history = useHistory();
    const { pathname } = useLocation();

    const { todos } = useContext(BoardContext);
    const pendingTodos = todos?.filter(todo => !todo.completed).length;

    useEffect(() => {
        history.push('/tasks');
    }, []);

    return (
        <div className='flex flex-col mb-4'>
            <nav className='flex flex-wrap justify-evenly gap-3 mb-4'>
                <NavLink to={TASKS_ROUTE} activeClassName='flex-1'>
                    <NavButton
                        title='Enemies'
                        icon={tasksIcon}
                        detail={`(${pendingTodos})`}
                        active={pathname === TASKS_ROUTE}
                    />
                </NavLink>
                <NavLink to={COMPLETED_ROUTE} activeClassName='flex-1'>
                    <NavButton
                        title='Chronicles'
                        icon={completedIcon}
                        active={pathname === COMPLETED_ROUTE}
                    />
                </NavLink>
                <NavLink to={HEROES_ROUTE} activeClassName='flex-1'>
                    <NavButton
                        title='Heroes'
                        icon={heroesIcon}
                        active={pathname === HEROES_ROUTE}
                    />
                </NavLink>
            </nav>
            <Route path={TASKS_ROUTE} component={TodoList} />
            <Route path={COMPLETED_ROUTE} component={CompletedTasks} />
            <Route path={HEROES_ROUTE} component={Heroes} />
        </div>
    );
}

export default MobileBoard;
