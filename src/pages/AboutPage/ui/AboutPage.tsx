import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('Тут рассказ о нашем сайте')}
        </div>
    );
};

export default AboutPage;
