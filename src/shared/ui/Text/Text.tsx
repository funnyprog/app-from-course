import { classNames } from 'shared/lib';
import { memo } from 'react';
import { TextAlign, TextTheme } from 'shared/enums';
import cls from './Text.module.scss';

interface TextProps {
    className?: string
    title?: string
    text?: string
    theme?: TextTheme
    align?: TextAlign
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
        align = TextAlign.LEFT,
    } = props;

    const mainCn = classNames(
        cls.text,
        {},
        [className, cls[theme], cls[align]],
    );

    return (
        <div className={mainCn}>
            {title && (
                <p className={cls.title}>
                    {title}
                </p>
            )}
            {text && (
                <p className={cls.text}>
                    {text}
                </p>
            )}
        </div>
    );
});
