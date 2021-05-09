import React from 'react';
import { v4 as uuidv4 } from 'uuid';

import assassin from 'assets/images/assasin.png';
import dragon from 'assets/images/dragon.png';
import genie from 'assets/images/genie.png';
import knight from 'assets/images/knight.png';
import spartan from 'assets/images/spartan.png';

import Character from 'components/common/Character/Character';

interface Hero {
    id: string,
    src: string,
    name: string,
    description: string,
    cost: number,
    color: string,
    unlocked: boolean,
    selected: boolean
}

const heroes: Hero[] = [
    {
        id: uuidv4(),
        src: assassin,
        name: 'Thragg',
        description: 'Skilled, fast and deadly productive.',
        cost: 0,
        color: '#F2D25E',
        unlocked: true,
        selected: true
    },
    {
        id: uuidv4(),
        src: spartan,
        name: 'Lucan',
        description: 'Focused and pragmatic with a get it done attitude.',
        cost: 100,
        color: '#678FCC',
        unlocked: false,
        selected: false
    },
    {
        id: uuidv4(),
        src: knight,
        name: 'Nolan',
        description: 'Strong and persistent, difficult tasks don\'t stand a chance.',
        cost: 200,
        color: '#CE5353',
        unlocked: false,
        selected: false
    },
    {
        id: uuidv4(),
        src: genie,
        name: 'Allen',
        description: 'Wise and balanced, work and fun have earned their place.',
        cost: 300,
        color: '#53CE9B',
        unlocked: false,
        selected: false
    },
    {
        id: uuidv4(),
        src: dragon,
        name: 'Drogon',
        description: 'Unstoppable!',
        cost: 400,
        color: '#7B6AE4',
        unlocked: false,
        selected: false
    }
];

const Characters: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col items-center border-b-2 border-c-bg-tertiary pb-4 mb-4'>
                <small className='mb-4'>Who are you today?</small>
                <img className='mb-1' alt='Selected Hero'></img>
                <div className='font-bold'>Name</div>
                <small><p className='text-c-text opacity-70'>Description</p></small>
            </div>
            <div className='flex flex-col gap-8'>
                {
                    heroes.filter(({ selected }) => !selected).map(({ id, src, name, cost, color }) => {
                        return <Character
                            key={id}
                            src={src}
                            name={name}
                            cost={cost}
                            color={color}
                        />;
                    })
                }
            </div>
        </div>
    );
}

export default Characters;
