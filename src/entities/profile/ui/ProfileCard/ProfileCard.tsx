import { classNames } from 'shared/lib';
import { Button, Text } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ButtonThemesEnum } from 'shared/enums';
import { useSelector } from 'react-redux';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className } = props;

    const { t } = useTranslation('profile');
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const data = useSelector(getProfileData);
    const readonly = useSelector(getProfileReadonly);

    if (isLoading) {
        return (<div />);
    }

    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('ProfilePage.card.header.text')} />
                <Button
                    theme={ButtonThemesEnum.CLEAR}
                >
                    {t('ProfilePage.card.header.button.text')}
                </Button>
            </div>
            <div className={cls.data}>
                <span>{data?.firstname}</span>
                <span>{data?.lastname}</span>
            </div>
        </div>
    );
};
