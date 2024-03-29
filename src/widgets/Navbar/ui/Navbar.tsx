import { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonThemesEnum } from 'shared/enums';
import { useSelector } from 'react-redux';
import { getUserAuthData, userActions } from 'entities/user';
import { useAppDispatch } from 'shared/hooks';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = memo((props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const authData = useSelector(getUserAuthData);

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const handleOpenAuthModal = useCallback(() => {
        setIsOpenAuthModal(!isOpenAuthModal);
    }, [isOpenAuthModal]);

    const handleLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar, {}, [className])}>
                <Button
                    className={cls.navbarLinks}
                    theme={ButtonThemesEnum.CLEAR}
                    onClick={handleLogout}
                >
                    {t('widgets.navbar.logout.text')}
                </Button>
            </div>
        );
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.navbarLinks}
                theme={ButtonThemesEnum.CLEAR}
                onClick={handleOpenAuthModal}
            >
                {t('widgets.navbar.auth.text')}
            </Button>
            {isOpenAuthModal && (
                <LoginModal
                    isOpen={isOpenAuthModal}
                    onClose={handleOpenAuthModal}
                />
            )}
        </div>
    );
});
