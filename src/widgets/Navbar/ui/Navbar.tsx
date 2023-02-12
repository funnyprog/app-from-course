import cls from './Navbar.module.scss';
import {classNames} from "shared/lib";
import {AppLink} from "shared/ui";
import {AppLinkThemesEnum, RoutePathsEnum} from "shared/enums";


interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarLinks}>
                <AppLink
                    to={RoutePathsEnum.MAIN}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.PRIMARY}
                >
                    Главная
                </AppLink>
                <AppLink
                    to={RoutePathsEnum.ABOUT}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.DANGER}
                >
                    О проекте
                </AppLink>
            </div>
        </div>
    );
};

