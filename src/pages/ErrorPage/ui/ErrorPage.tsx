import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            {t('pages.ErrorPage.text')}

            <Button>
                {t('pages.ErrorPage.button.text')}
            </Button>
        </div>
    );
};
