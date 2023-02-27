import { classNames } from 'shared/lib';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    AppLink, Button, LangSwitcher, ThemeSwitcher,
} from 'shared/ui';
import {
    AppLinkThemesEnum, ButtonSizeEnum, ButtonThemesEnum, LocalStorageKeysEnum, RoutePathsEnum,
} from 'shared/enums';
import HouseIcon from 'shared/assets/icons/House.svg';
import InfoIcon from 'shared/assets/icons/Info.svg';
import cls from './Sidebar.module.scss';

const isSidebarCollapsed = localStorage.getItem(LocalStorageKeysEnum.IS_SIDEBAR_COLLAPSED);
const defaultCollapsed = JSON.parse(isSidebarCollapsed) || false;

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(defaultCollapsed);
    const { t } = useTranslation();

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
        localStorage.setItem(
            LocalStorageKeysEnum.IS_SIDEBAR_COLLAPSED,
            JSON.stringify(!collapsed),
        );
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="collapse_switcher"
                className={cls.collapseSwitcher}
                theme={ButtonThemesEnum.BACKGROUND_INVERTED}
                onClick={handleCollapsed}
                square
                size={ButtonSizeEnum.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.links}>
                <AppLink
                    to={RoutePathsEnum.MAIN}
                    className={cls.link}
                    theme={AppLinkThemesEnum.PRIMARY}
                >
                    <HouseIcon className={cls.icon} />
                    <span className={cls.linkText}>
                        {t('pages.routes.main')}
                    </span>
                </AppLink>
                <AppLink
                    to={RoutePathsEnum.ABOUT}
                    className={cls.link}
                    theme={AppLinkThemesEnum.PRIMARY}
                >
                    <InfoIcon className={cls.icon} />
                    <span className={cls.linkText}>
                        {t('pages.routes.about')}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
