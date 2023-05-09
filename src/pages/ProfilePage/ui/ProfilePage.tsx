import { classNames, DynamicModuleLoader, ReducerList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { profileReducer } from 'entities/profile';
import cls from './ProfilePage.module.scss';

const reducers: ReducerList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string
}

const ProfilePage = (props: ProfilePageProps) => {
    const { className } = props;

    const { t } = useTranslation('profile');

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, {}, [className])}>
                {t('ProfilePage.text')}
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
