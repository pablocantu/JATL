import React, { useContext } from 'react';

import TodoList from './TodoList';
import ContentBox from 'components/common/ContentBox/ContentBox';
import Currency from 'components/common/Currency/Currency';

import { GlobalContext } from 'components/Layout/Layout';

const DesktopTodos: React.FC = () => {
    const { coins } = useContext(GlobalContext);

    return (
        <div className='d-flex flex-col'>
            <div className='flex justify-between w-full mb-4'>
                <span className='font-bold'>To-Dos of the Day</span>
                <Currency amount={coins} />
            </div>
            <ContentBox>
                <TodoList />
            </ContentBox>
        </div>
    );
}

export default DesktopTodos;
