import React from 'react';

interface Props {
    iconClass: string,
    onClick: () => void,
    disabled?: boolean
}

const IconButton: React.FC<Props> = ({
    iconClass = 'fas fa-smile-beam',
    onClick,
    disabled = false
}: Props) => {
    return (
        <i
            className={`hover:rounded-full hover:p-1 ${iconClass}`}
            onClick={() => {
                if (onClick && !disabled) onClick();
            }}
        ></i>
    );
}

export default IconButton;
