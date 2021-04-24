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
    preferedTheme: string,
    setPreferedTheme: React.Dispatch<React.SetStateAction<ThemeType>> | (() => string)
}

export const ThemeContext = createContext<Partial<ContextProps>>({});

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
    const [preferedTheme, setPreferedTheme] = useState<ThemeType>('light');

    useEffect(() => {
        const prefersLightTheme = window.matchMedia('(prefers-color-scheme: light)').matches;
        setPreferedTheme(prefersLightTheme ? 'light' : 'dark');
    }, []);

    useEffect(() => {
        const themeToApply = themes[preferedTheme];
        const rootStyling = document.documentElement.style;

        for (const property in themeToApply) {
            rootStyling.setProperty(`--${property}`, themeToApply[property as keyof ThemeColors]);
        }

    }, [preferedTheme]);

    return (
        <ThemeContext.Provider value={{ preferedTheme, setPreferedTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
