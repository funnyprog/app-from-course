import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { AppLinkThemesEnum, RoutePathsEnum } from 'shared/enums';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={cls.navbarLinks}>
                <AppLink
                    to={RoutePathsEnum.MAIN}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.PRIMARY}
                >
                    {t('pages.routes.main')}
                </AppLink>
                <AppLink
                    to={RoutePathsEnum.ABOUT}
                    className={cls.navbarBtn}
                    theme={AppLinkThemesEnum.DANGER}
                >
                    {t('pages.routes.about')}
                </AppLink>
            </div>
        </div>
    );
};
