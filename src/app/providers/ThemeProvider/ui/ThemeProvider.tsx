import {FC, useMemo, useState} from 'react';
import {ThemeContext, ThemeContextProps} from '../lib/ThemeContext';
import {LocalStorageKeysEnum, ThemeEnum} from "shared/enums";


const defaultTheme = localStorage.getItem(LocalStorageKeysEnum.THEME) as ThemeEnum || ThemeEnum.LIGHT


export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState(defaultTheme)

    const defaultProviderValue = useMemo<ThemeContextProps>(() => ({
        theme,
        toggleTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};

