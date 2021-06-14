import React from 'react'
import { Route, Link, useLocation } from 'react-router-dom';

import NavButton from 'components/common/NavButton/NavButton';
import TodoList from 'components/Layout/Board/TodoList/TodoList';
import CompletedTasks from 'components/Layout/Board/CompletedTasks/CompletedTasks';
import Heroes from 'components/Layout/Board/Heroes/Heroes';

const MobileBoard: React.FC = () => {
    const { pathname } = useLocation();

    return (
        <div className='flex flex-col mb-4'>
            <div className='flex flex-wrap'>
                <Link to='/tasks'>
                    <NavButton title='Enemies' icon='fas fa-user' detail='(0)' active={pathname === '/tasks'} />
                </Link>
                <Link to='/completed'>
                    <NavButton title='Chronicles' icon='fas fa-user' active={pathname === '/completed'} />
                </Link>
                <Link to='/heroes'>
                    <NavButton title='Heroes' icon='fas fa-user' active={pathname === '/heroes'} />
                </Link>
            </div>
            <Route path='/tasks' component={TodoList} />
            <Route path='/completed' component={CompletedTasks} />
            <Route path='/heroes' component={Heroes} />
        </div>
    );
}

export default MobileBoard;
