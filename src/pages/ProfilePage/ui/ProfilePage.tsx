import { classNames, DynamicModuleLoader, ReducerList } from 'shared/lib';
import {
    fetchProfileData,
    EditableProfileCard,
    profileReducer,
} from 'features/EditableProfileCard';
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

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.profilePage, {}, [className])}>
                <EditableProfileCard />
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
