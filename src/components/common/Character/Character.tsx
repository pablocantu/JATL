import React from 'react'

import cp from 'utils/classParser';

import coinImage from 'assets/images/money.png';

interface Props {
    src: string | undefined,
    name: string | undefined,
    color: string | undefined,
    selected: boolean | undefined,
    cost?: number,
    description?: string,
    onSelectHero?: () => void
}

const Character: React.FC<Props> = ({
    src,
    name,
    color,
    selected,
    cost,
    description,
    onSelectHero
}: Props) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <div
                style={{ backgroundColor: color }}
                className={cp(`
                    relative
                    ${selected ? 'h-24 w-24' : 'h-16 w-16'}
                    p-4
                    rounded-full
                    ${!selected && 'cursor-pointer'}
                `)}
                onClick={() => onSelectHero && onSelectHero()}
            >
                <img
                    className={cp(`
                        m-auto
                        absolute top-0 bottom-0 right-0 left-0
                        ${selected ? 'h-16 w-16' : 'h-12 w-12'}
                    `)}
                    alt={name}
                    src={src}
                ></img>
            </div>
            <div className='mt-1 font-bold'>{name}</div>
            {
                description &&
                <small><p className='text-c-text opacity-70'>{description}</p></small>
            }
            {
                cost ?
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
                    </div> : null
            }
        </div>
    );
}

export default Character;
