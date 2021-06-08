import React from 'react'

import Currency from 'components/common/Currency/Currency';
import Character from 'components/common/Character/Character';

import { Hero } from './models/Hero';

interface Props {
    hero: Hero,
    onSelect?: () => void,
    onUnlock?: () => void
}

const HeroItem: React.FC<Props> = ({
    hero: {
        src,
        name,
        color,
        cost,
        unlocked
    },
    onSelect,
    onUnlock
}: Props) => {
    return (
        <div className='flex flex-col items-center text-center'>
            <div onClick={() => onSelect && onSelect()}>
                <Character
                    src={src}
                    name={name}
                    bgColor={color}
                />
            </div>
            <div className='mt-1 font-bold'>{name}</div>
            {
                (cost && !unlocked) ?
                    <div
                        className='mt-1 mx-auto cursor-pointer'
                        onClick={() => onUnlock && onUnlock()}
                    >
                        <Currency amount={cost} />
                    </div> : null
            }
        </div>
    );
}

export default HeroItem;
