import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import { ButtonSizeEnum, ButtonThemesEnum } from 'shared/enums';
import ButtonLoader from 'shared/assets/icons/ButtonLoader.svg';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonThemesEnum,
    square?: boolean,
    size?: ButtonSizeEnum,
    withLoader?: boolean
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        square,
        size = ButtonSizeEnum.M,
        disabled,
        withLoader,
        ...otherProps
    } = props;

    const mods = {
        [cls[theme]]: Boolean(theme),
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
        [cls.withLoader]: withLoader,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className])}
            disabled={disabled}
            {...otherProps}
        >
            {withLoader && (
                <ButtonLoader />
            )}
            {children}
        </button>
    );
};
