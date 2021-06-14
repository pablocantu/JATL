import IconButton from 'components/common/IconButton/IconButton';
import React from 'react';

import cp from 'utils/classParser';

import Enemy from 'models/Enemy';
interface Props {
    key?: string | number,
    title: string,
    completed: boolean,
    enemy?: Enemy,
    onComplete?: () => void,
    onDelete?: () => void,
    onRestore?: () => void,
    addClass?: string
}

const Task: React.FC<Props> = ({
    key,
    title,
    completed,
    enemy,
    onComplete = () => null,
    onDelete = () => null,
    onRestore = () => null,
    addClass = ''
}: Props) => {
    return (
        <div key={key} className='flex items-center gap-4'>
            {enemy &&
                <img className='h-8 w-8' alt={enemy.name} src={enemy.src} />
            }
            <div className={cp(`
                flex items-center flex-1 gap-4
                bg-c-bg-tertiary
                px-4 py-3 rounded-lg
                ${addClass}
            `)}>
                {completed ?
                    <IconButton
                        addClass='text-yellow-600'
                        icon='fas fa-arrow-left'
                        onClick={() => onRestore()}
                    />
                    :
                    <IconButton
                        addClass='text-blue-600'
                        icon='fas fa-check'
                        onClick={() => onComplete()}
                    />
                }
                <span className={cp(`
                    flex-grow mx-4
                    text-base font-bold text-c-text
                    ${completed ? 'line-through' : ''}
                `)}>
                    {title}
                </span>
                {!completed &&
                    <IconButton
                        addClass='text-red-600'
                        icon='fas fa-times'
                        onClick={() => onDelete()}
                    />
                }
            </div>
        </div>
    );
}

export default Task;
