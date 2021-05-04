import React from 'react';

import cp from 'utils/classParser';

interface Props {
    icon: string,
    onClick: () => void,
    disabled?: boolean,
    addClass?: string
}

const IconButton: React.FC<Props> = ({
    icon = 'fas fa-smile-beam',
    addClass,
    onClick,
    disabled = false
}: Props) => {
    return (
        <i
            className={cp(`
                flex items-center
                text-center
                rounded-full
                cursor-pointer
                p-3
                w-10 h-10
                ${icon}
                ${addClass} 
                hover:rounded-full
                hover:bg-opacity-10
                hover:bg-black
            `)}
            onClick={() => {
                if (onClick && !disabled) onClick();
            }}
        ></i>
    );
}

export default IconButton;
