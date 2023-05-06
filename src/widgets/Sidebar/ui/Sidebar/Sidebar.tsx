import { classNames } from 'shared/lib';
import { memo, useState } from 'react';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { ButtonSizeEnum, ButtonThemesEnum, LocalStorageKeysEnum } from 'shared/enums';
import { SidebarLink } from '../SidebarLink/SidebarLink';
import cls from './Sidebar.module.scss';
import { SIDEBAR_LINKS } from '../../model/links';

const isSidebarCollapsed = localStorage.getItem(LocalStorageKeysEnum.IS_SIDEBAR_COLLAPSED);
const defaultCollapsed = JSON.parse(isSidebarCollapsed) || false;

interface SidebarProps {
    className?: string
}

export const Sidebar = memo((props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

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
                {SIDEBAR_LINKS.map((link) => (
                    <SidebarLink
                        key={link.to}
                        item={link}
                        collapsed={collapsed}
                    />
                ))}
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
});
