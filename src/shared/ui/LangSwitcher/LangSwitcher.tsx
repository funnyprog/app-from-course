import {useTranslation} from "react-i18next";
import cls from './LangSwitcher.module.scss'
import {classNames} from "shared/lib";
import {Button} from "shared/ui";
import {ButtonThemesEnum} from "shared/enums";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const {className} = props
    const {t, i18n} = useTranslation()

    const handleChangeLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <Button
            theme={ButtonThemesEnum.CLEAR}
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={handleChangeLang}
        >
            {t('Язык')}
        </Button>
    );
};

