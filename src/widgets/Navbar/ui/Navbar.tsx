import {useTranslation} from "react-i18next";
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib";
import {AppLink} from "shared/ui";
import {AppLinkThemesEnum, RoutePathsEnum} from "shared/enums";


interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const {className} = props
    const {t} = useTranslation()


    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarLinks}>
                <AppLink
                    to={RoutePathsEnum.MAIN}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.PRIMARY}
                >
                    {t('Главная')}
                </AppLink>
                <AppLink
                    to={RoutePathsEnum.ABOUT}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.DANGER}
                >
                    {t('О проекте')}
                </AppLink>
            </div>
        </div>
    );
};

