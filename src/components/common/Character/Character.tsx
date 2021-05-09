import React from 'react'

import cp from 'utils/classParser';

import coinImage from 'assets/images/money.png';

interface Props {
    src: string,
    name: string,
    cost: number,
    color: string
}

const Character: React.FC<Props> = ({
    src,
    name,
    cost = 0,
    color
}: Props) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <div style={{ backgroundColor: color }} className='relative h-16 w-16 p-4 rounded-full'>
                <img
                    className='m-auto absolute top-0 bottom-0 right-0 left-0 cursor-pointer h-12 w-12'
                    alt={name}
                    src={src}
                ></img>
            </div>
            <div className='mt-1 font-bold'>{name}</div>
            <div className={cp(`
                flex items-center justify-center
                gap-1
                mt-1 mx-auto py-1 px-2
                bg-c-bg-secondary text-c-text
                rounded-md
                max-w-max
            `)}>
                <img
                    className='h-5 w-5'
                    src={coinImage}
                    alt='Coin'
                ></img>
                <span className='font-bold'>{cost}</span>
            </div>
        </div>
    );
}

export default Character;
