import { FC, useMemo, useState } from 'react';
import { ThemeContext, ThemeContextProps } from 'shared/contexts';
import { LocalStorageKeysEnum, ThemeEnum } from 'shared/enums';

const themeFromLocalStorage = localStorage.getItem(LocalStorageKeysEnum.THEME) as ThemeEnum;
const defaultTheme = themeFromLocalStorage || ThemeEnum.LIGHT;

export const ThemeProvider: FC = ({ children }) => {
    const [theme, setTheme] = useState(defaultTheme);

    const defaultProviderValue = useMemo<ThemeContextProps>(() => ({
        theme,
        toggleTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};
