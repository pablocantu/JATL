import React, { createContext, useEffect, useState } from 'react';

import {
    ThemeType,
    ThemeColors,
    ThemeOption
} from './models/themeModels';

const themes: ThemeOption = {
    light: {
        text: '#262632',
        backgroundPrimary: '#EFEFEF',
        backgroundSecondary: '#E8E8E8',
        backgroundTertirary: '#DBDBDB',
        primary: '#454ade',
        secondary: '#ee5622',
        success: '#139a43',
        danger: '#fd584f',
        warning: '#eca72c'
    },
    dark: {
        text: '#f7f7ff',
        backgroundPrimary: '#202225',
        backgroundSecondary: '#2F3136',
        backgroundTertirary: '#3F434A',
        primary: '#454ade',
        secondary: '#ee5622',
        success: '#139a43',
        danger: '#fd584f',
        warning: '#eca72c'
    }
}

interface Props {
    children: React.ReactNode
}

interface ContextProps {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<ThemeType>> | (() => string)
}

export const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
    const [theme, setTheme] = useState<ThemeType>('light');

    useEffect(() => {
        const lightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
        setTheme(lightTheme ? 'light' : 'dark');
    }, []);

    useEffect(() => {
        const themeToApply = themes[theme];
        const rootStyling = document.documentElement.style;

        for (const property in themeToApply) {
            rootStyling.setProperty(`--${property}`, themeToApply[property as keyof ThemeColors]);
        }

    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
