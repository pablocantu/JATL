import React from 'react';

import coinImage from 'assets/images/money.png';

import cp from 'utils/classParser';

interface Props {
    amount: number
}

const Currency: React.FC<Props> = ({
    amount
}: Props) => {
    return (
        <div className={cp(`
                flex items-center justify-center gap-1
                py-1 px-2
                bg-c-bg-secondary text-c-text
                rounded-md
                max-w-max
            `)}>
            <img
                className='h-5 w-5'
                src={coinImage}
                alt='Coin'
            ></img>
            <span className='font-bold'>{amount}</span>
        </div>
    );
}

export default Currency;
