import { ProfileData } from 'shared/types';
import { classNames } from 'shared/lib';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
    data?: ProfileData
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { className, data } = props;

    const mainCn = classNames(cls.profileCard, {}, [className]);

    return (
        <div className={mainCn}>
            <span>{data?.firstname}</span>
            <span>{data?.lastname}</span>
        </div>
    );
};
