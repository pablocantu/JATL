import React from 'react';

import swords from 'assets/images/swords.png';

interface Props {
    count: number
}

const KillCounter: React.FC<Props> = ({
    count = 0
}: Props) => {
    return (
        <div className='flex items-center text-c-text'>
            <img className='h-5 w-5 mr-2' src={swords}></img>
            <span className='font-bold text-lg'>{count}</span>
        </div>
    );
}

export default KillCounter;
