import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonThemesEnum } from 'shared/enums';

interface LangSwitcherProps {
    className?: string
    short: boolean
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short } = props;
    const { t, i18n } = useTranslation();

    const handleChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            theme={ButtonThemesEnum.CLEAR}
            className={classNames('', {}, [className])}
            onClick={handleChangeLang}
        >
            {t(short
                ? 'widgets.sidebar.langSwitcher.shortLang'
                : 'widgets.sidebar.langSwitcher.lang')}
        </Button>
    );
};
