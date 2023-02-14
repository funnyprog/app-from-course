import { classNames } from 'shared/lib';
import { useState } from 'react';
import { Button, LangSwitcher, ThemeSwitcher } from 'shared/ui';
import { LocalStorageKeysEnum } from 'shared/enums';
import cls from './Sidebar.module.scss';

const isSidebarCollapsed = localStorage.getItem(LocalStorageKeysEnum.IS_SIDEBAR_COLLAPSED);
const defaultCollapsed = JSON.parse(isSidebarCollapsed) || false;

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const [collapsed, setCollapsed] = useState(defaultCollapsed);

    const handleCollapsed = () => {
        setCollapsed(!collapsed);
        localStorage.setItem(LocalStorageKeysEnum.IS_SIDEBAR_COLLAPSED, JSON.stringify(!collapsed));
    };

    return (
        <div className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button
                onClick={handleCollapsed}
            >
                Toggle
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
