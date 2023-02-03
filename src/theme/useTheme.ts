import {ThemeContext} from "./ThemeContext";
import {useCallback, useContext} from "react";
import {LocalStorageKeysEnum, ThemeEnum} from "../shared/enums";


export interface UseThemeResult {
    theme: ThemeEnum
    handleToggleTheme: () => void
}


export function useTheme(): UseThemeResult {
    const {theme, toggleTheme} = useContext(ThemeContext)

    const handleToggleTheme = useCallback(() => {
        const newTheme = theme === ThemeEnum.DARK ? ThemeEnum.LIGHT: ThemeEnum.DARK
        toggleTheme(newTheme)
        localStorage.setItem(LocalStorageKeysEnum.THEME, newTheme)
    }, [theme])

    return {
        theme,
        handleToggleTheme
    }
}