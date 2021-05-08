import IconButton from 'components/common/IconButton/IconButton';
import React from 'react';


interface Props {
    key?: string | number,
    title: string,
    completed: boolean,
    onComplete?: () => void,
    onDelete?: () => void,
    onRestore?: () => void,
    addClass?: string
}

const Task: React.FC<Props> = ({
    key,
    title,
    completed,
    onComplete = () => null,
    onDelete = () => null,
    onRestore = () => null,
    addClass = ''
}: Props) => {
    return (
        <div key={key} className={`flex items-center gap-4 bg-c-bg-tertiary px-4 py-3 rounded-lg ${addClass}`.trim()}>
            { completed ?
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
            <span className={`flex-grow text-base font-bold text-c-text mx-4 ${completed ? 'line-through' : ''}`.trim()}>
                {title}
            </span>
            { !completed &&
                <IconButton
                    addClass='text-red-600'
                    icon='fas fa-times'
                    onClick={() => onDelete()}
                />
            }
        </div>
    );
}

export default Task;
