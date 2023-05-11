import { classNames, DynamicModuleLoader, ReducerList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { fetchProfileData, ProfileCard, profileReducer } from 'entities/profile';
import { useAppDispatch } from 'shared/hooks';
import { useEffect } from 'react';
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
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, {}, [className])}>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
