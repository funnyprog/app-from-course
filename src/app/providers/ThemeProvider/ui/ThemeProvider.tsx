import {
    FC,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { ThemeContext, ThemeContextProps } from 'shared/contexts';
import { LocalStorageKeysEnum, ThemeEnum } from 'shared/enums';

const themeFromLocalStorage = localStorage.getItem(LocalStorageKeysEnum.THEME) as ThemeEnum;
const defaultTheme = themeFromLocalStorage || ThemeEnum.LIGHT;

interface ThemeProviderProps {
    initialTheme?: ThemeEnum
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const [theme, setTheme] = useState(initialTheme || defaultTheme);

    const defaultProviderValue = useMemo<ThemeContextProps>(() => ({
        theme,
        toggleTheme: setTheme,
    }), [theme]);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={defaultProviderValue}>
            {children}
        </ThemeContext.Provider>
    );
};
