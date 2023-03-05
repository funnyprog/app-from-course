import { classNames } from 'shared/lib';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>

interface InputProps extends HTMLInputProps {
    className?: string,
    value?: string,
    onChange?: (value: string) => void,
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.inputWrapper, {}, [className])}>
            <input
                id="test"
                className={cls.input}
                value={value}
                placeholder={placeholder}
                onChange={handleInputChange}
                type={type}
                {...otherProps}
            />
            <label htmlFor="test" className={cls.placeholder}>{placeholder}</label>
        </div>
    );
});
