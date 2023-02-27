import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import cls from './MainPage.module.scss';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.mainPage, {}, [])}>
            {t('Это главная страница')}
        </div>
    );
};

export default MainPage;
