import {RouteProps} from "react-router-dom";
import {AppRoutesEnum} from "shared/enums";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";



export const routePaths: Record<AppRoutesEnum, string> = {
    [AppRoutesEnum.MAIN]: '/',
    [AppRoutesEnum.ABOUT]: '/about'
}

export const appRoutesConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: routePaths.main,
        element: <MainPage />
    },
    [AppRoutesEnum.ABOUT]: {
        path: routePaths.main,
        element: <AboutPage />
    }
}