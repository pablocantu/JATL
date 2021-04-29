import IconButton from 'components/common/IconButton/IconButton';
import React from 'react';

const Todo: React.FC = () => {
    return (
        <div className='flex gap-4 bg-c-bg-tertiary px-4 py-3'>
            <IconButton
                iconClass='fas fa-check'
                onClick={() => console.log('Implement method to mark completed tasks')}
            />
        </div>
    );
}

export default Todo;
