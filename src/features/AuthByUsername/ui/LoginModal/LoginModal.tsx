import { classNames } from 'shared/lib';
import { Loader, Modal } from 'shared/ui';
import { Suspense } from 'react';
import cls from './LoginModal.module.scss';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string
    isOpen: boolean,
    onClose: () => void
}

export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            className={classNames(cls.loginModal, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccessLogin={onClose} />
            </Suspense>
        </Modal>
    );
};
