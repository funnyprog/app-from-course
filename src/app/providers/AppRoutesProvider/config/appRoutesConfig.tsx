import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {AppRoutesEnum, RoutePathsEnum} from "shared/enums";


export const appRoutesConfig: Record<AppRoutesEnum, RouteProps> = {
    [AppRoutesEnum.MAIN]: {
        path: RoutePathsEnum.MAIN,
        element: <MainPage />
    },
    [AppRoutesEnum.ABOUT]: {
        path: RoutePathsEnum.ABOUT,
        element: <AboutPage />
    }
}