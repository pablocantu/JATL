import React, { useContext } from 'react';

import SelectedHero from './SelectedHero';
import HeroItem from './HeroItem';

import { BoardContext } from '../Board';

import cp from 'utils/classParser';

const Heroes: React.FC = () => {
    const {
        hero: {
            src,
            name,
            color,
            description
        },
        heroes,
        onSelectHero,
        onUnlockHero
    } = useContext(BoardContext);

    return (
        <div className='fade-in-anim'>
            <div className='flex flex-col items-center text-center border-b-2 border-c-bg-tertiary pb-4 mb-4'>
                <SelectedHero
                    src={src}
                    name={name}
                    bgColor={color}
                    description={description}
                />
            </div>
            <div className={cp(`
                flex flex-row justify-evenly flex-wrap gap-8
                lg:flex-col
            `)}>
                {
                    heroes?.filter(({ selected }) => !selected).map(hero => {
                        return <HeroItem
                            key={hero.id}
                            hero={hero}
                            onSelect={() => onSelectHero && onSelectHero(hero)}
                            onUnlock={() => onUnlockHero && onUnlockHero(hero)}
                        />;
                    })
                }
            </div>
        </div>
    );
}

export default Heroes;
