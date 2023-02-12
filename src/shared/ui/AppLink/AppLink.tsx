import {FC} from "react";
import {Link, LinkProps} from "react-router-dom";
import cls from './AppLink.module.scss'
import {classNames} from "shared/lib";
import {AppLinkThemesEnum} from "shared/enums";

interface AppLinkProps extends LinkProps {
    theme?: AppLinkThemesEnum
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) => {
    const {
        children,
        className,
        theme = AppLinkThemesEnum.PRIMARY,
        ...otherProps
    } = props


    return (
        <Link
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
};

