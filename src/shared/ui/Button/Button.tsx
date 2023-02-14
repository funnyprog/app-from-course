import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import { ButtonThemesEnum } from 'shared/enums';
import cls from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string
    theme?: ButtonThemesEnum
}

export const Button: FC<ButtonProps> = (props: ButtonProps) => {
    const {
        className,
        children,
        theme,
        ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
