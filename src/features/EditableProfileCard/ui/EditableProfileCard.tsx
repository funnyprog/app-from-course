import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Loader, Text } from 'shared/ui';
import { ProfileCard } from 'entities/profile';
import { TextAlign, TextTheme } from 'shared/enums';
import { useTranslation } from 'react-i18next';
import cls from './EditableProfileCard.module.scss';
import { getProfileIsLoading } from '../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../model/selectors/getProfileError/getProfileError';
import { getProfileData } from '../model/selectors/getProfileData/getProfileData';
import { Header } from '../ui/Header/Header';

interface EditProfileCardProps {
    className?: string
}

export const EditableProfileCard = memo((props: EditProfileCardProps) => {
    const { className } = props;

    const { t } = useTranslation('profile');

    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const data = useSelector(getProfileData);

    const mainCn = classNames(cls.main, {}, [className]);
    const loadingCn = classNames(cls.main, {}, [cls.loading]);
    const errorCn = classNames(cls.main, {}, [cls.error]);

    if (isLoading) {
        return (
            <div className={loadingCn}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={errorCn}>
                <Text
                    title={t('Произошла ошибка при загрузке страницы')}
                    text={t('Попробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                    align={TextAlign.CENTER}
                />
            </div>
        );
    }

    return (
        <div className={mainCn}>
            <Header />
            <ProfileCard data={data} />
        </div>
    );
});
