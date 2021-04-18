import React, { useEffect, useState } from 'react';

type Props = {
    children: React.ReactNode
}

type Theme = 'light' | 'dark';

type ThemeColors = {
    text: string,
    background: string,
    primary: string,
    secondary: string,
    success: string,
    danger: string,
    warning: string
}

type ThemeOptions = {
    light: ThemeColors,
    dark: ThemeColors
}

const themes: ThemeOptions = {
    light: {
        text: '#262632',
        background: '#f7f7ff',
        primary: '#454ade',
        secondary: '#ee5622',
        success: '#139a43',
        danger: '#fd584f',
        warning: '#eca72c'
    },
    dark: {
        text: '#f7f7ff',
        background: '#262632',
        primary: '#454ade',
        secondary: '#ee5622',
        success: '#139a43',
        danger: '#fd584f',
        warning: '#eca72c'
    }
}

const ThemeProvider: React.FC<Props> = ({ children }: Props) => {
    const [preferedTheme, setPreferedTheme] = useState<Theme>('light');

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
        <div>
            <button>Toggle Theme</button>
            {children}
        </div>
    );
}

export default ThemeProvider;
