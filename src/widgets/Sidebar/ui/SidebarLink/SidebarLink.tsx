import { AppLinkThemesEnum } from 'shared/enums';
import { AppLink } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import cls from './SidebarLink.module.scss';
import { SidebarLinkType } from '../../model/links';

interface SidebarLinkProps {
    item: SidebarLinkType
    collapsed: boolean
}

export const SidebarLink = memo((props: SidebarLinkProps) => {
    const { item, collapsed } = props;
    const { t } = useTranslation();

    return (
        <AppLink
            to={item.to}
            className={classNames(cls.link, { [cls.collapsed]: collapsed })}
            theme={AppLinkThemesEnum.PRIMARY}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.linkText}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});
