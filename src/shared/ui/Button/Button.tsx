import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import { ButtonSizeEnum, ButtonThemesEnum } from 'shared/enums';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonThemesEnum,
    square?: boolean,
    size?: ButtonSizeEnum
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSizeEnum.M,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
