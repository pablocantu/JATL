import React from 'react'

import cp from 'utils/classParser';

interface Props {
    src: string,
    name: string,
    bgColor: string,
    height?: string,
    width?: string
}

const Character: React.FC<Props> = ({
    src,
    name,
    bgColor,
    height = 'h-12',
    width = 'w-12'
}: Props) => {
    return (
        <div
            style={{ backgroundColor: bgColor }}
            className='p-3 rounded-full'
        >
            <img
                className={cp(`
                    m-auto
                    ${height}
                    ${width}
                `)}
                alt={name}
                src={src}
            ></img>
        </div>
    );
}

export default Character;
