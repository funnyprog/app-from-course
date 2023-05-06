import { FC, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import { AppLinkThemesEnum } from 'shared/enums';
import cls from './AppLink.module.scss';

interface AppLinkProps extends LinkProps {
    theme?: AppLinkThemesEnum
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        children,
        className,
        theme = AppLinkThemesEnum.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
