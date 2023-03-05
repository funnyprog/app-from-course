import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginModal } from 'features/AuthByUsername';
import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';
import { ButtonThemesEnum } from 'shared/enums';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [isOpenAuthModal, setIsOpenAuthModal] = useState(false);

    const handleOpenAuthModal = useCallback(() => {
        setIsOpenAuthModal(!isOpenAuthModal);
    }, [isOpenAuthModal]);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                className={cls.navbarLinks}
                theme={ButtonThemesEnum.CLEAR}
                onClick={handleOpenAuthModal}
            >
                {t('widgets.navbar.auth.text')}
            </Button>
            <LoginModal
                isOpen={isOpenAuthModal}
                onClose={handleOpenAuthModal}
            />
        </div>
    );
};
