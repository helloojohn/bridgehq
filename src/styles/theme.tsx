"use client"

import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './globalStyles'


const lightTheme = {
    colors: {
        primary: '#fff',
        secondary: '#333',
    },
};

const darkTheme = {
    colors: {
        primary: '#333',
        secondary: '#fff'
    },
};

const ThemeContext = createContext<ThemeProps | null>(null);

const Theme = ({ children }: { children: React.ReactNode }) => {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme as Theme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const themeStyle = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <ThemeProvider theme={themeStyle}>
                <GlobalStyle />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default Theme;