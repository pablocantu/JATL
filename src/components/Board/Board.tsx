import React from 'react';

interface Props {
    title: string;
}

const Board: React.FC<Props> = ({ title }: Props) => {
    return (
        <div>
            {title}
        </div>
    );
}

export default Board;