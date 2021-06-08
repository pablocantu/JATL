import React, { useContext } from 'react';

import Character from 'components/common/Character/Character';

import { BoardContext } from '../Board';
import SelectedHero from './SelectedHero';

const Characters: React.FC = () => {
    const {
        hero,
        heroes,
        onSelectHero,
        onUnlockHero
    } = useContext(BoardContext);

    return (
        <div>
            <div className='flex flex-col items-center text-center border-b-2 border-c-bg-tertiary pb-4 mb-4'>
                <SelectedHero
                    src={hero?.src}
                    name={hero?.name}
                    bgColor={hero?.color}
                    description={hero?.description}
                />
            </div>
            <div className='flex flex-col gap-8'>
                {
                    heroes?.filter(({ selected }) => !selected).map(hero => {
                        return <Character
                            key={hero.id}
                            src={hero.src}
                            name={hero.name}
                            selected={false}
                            unlocked={hero.unlocked}
                            bgColor={hero.color}
                            cost={hero.cost}
                            onSelect={() => onSelectHero && onSelectHero(hero)}
                            onUnlock={() => onUnlockHero && onUnlockHero(hero)}
                        />;
                    })
                }
            </div>
        </div>
    );
}

export default Characters;
