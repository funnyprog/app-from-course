import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('about');

    return (
        <div>
            {t('AboutPage.text')}
        </div>
    );
};

export default AboutPage;
