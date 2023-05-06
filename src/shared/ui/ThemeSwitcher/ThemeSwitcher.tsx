import { useTheme } from 'shared/hooks';
import { classNames } from 'shared/lib';
import { ButtonThemesEnum, ThemeEnum } from 'shared/enums';
import { Button } from 'shared/ui';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import { memo } from 'react';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, handleToggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonThemesEnum.CLEAR}
            className={classNames('', {}, [className])}
            onClick={handleToggleTheme}
        >
            {theme === ThemeEnum.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
});
