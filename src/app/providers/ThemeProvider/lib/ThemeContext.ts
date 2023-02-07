import {createContext} from "react";
import {ThemeEnum} from "shared/enums";

export interface ThemeContextProps {
    theme?: ThemeEnum
    toggleTheme?: (newTheme: ThemeEnum) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})
