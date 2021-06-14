import React, { createContext, useState } from 'react';

import Sidebar from 'components/Layout/Sidebar/Sidebar';
import Board from './Board/Board';

import ContextProps from './GlobalContext';

export const GlobalContext = createContext<ContextProps | Record<string, never>>({});

const Layout: React.FC = () => {
    const [coins, setCoins] = useState<number>(0);
    const [killcount, setKillCount] = useState<number>(0);

    const onEarnCoins = (amount: number) => {
        setCoins(coins + amount);
    }

    const onRemoveCoins = (amount: number) => {
        setCoins(coins - amount);
    }

    const onKillEnemy = () => {
        setKillCount(killcount + 1);
    }

    return (
        <GlobalContext.Provider value={{
            coins,
            killcount,
            onEarnCoins,
            onRemoveCoins,
            onKillEnemy
        }}>
            <div className='flex flex-col md:flex-row'>
                <div className='sticky top-0 w-full text-right md:max-w-min md:h-screen z-50'>
                    <Sidebar />
                </div>
                <div className='w-11/12 sm:w-10/12 mx-auto py-8 z-40'>
                    <Board />
                </div>
            </div>
        </GlobalContext.Provider>
    );
}

export default Layout;