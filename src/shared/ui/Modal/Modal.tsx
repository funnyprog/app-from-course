import React, {
    ReactNode,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';
import CrossIcon from 'shared/assets/icons/Cross.svg';
import cls from './Modal.module.scss';

const enum ModalEnum {
    ANIMATION_DELAY = 300,
    KEYBOARD_KEY_ESCAPE = 'Escape'
}

interface ModalProps {
    className?: string
    children: ReactNode,
    isOpen: boolean
    onClose?: () => void
}

export const Modal = (props: ModalProps) => {
    const {
        className,
        children,
        isOpen,
        onClose,
    } = props;

    const delayRef = useRef<ReturnType<typeof setTimeout>>(null);
    const [isClosing, setIsClosing] = useState(false);

    const handleClose = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            delayRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ModalEnum.ANIMATION_DELAY);
        }
    }, [onClose]);

    const handleClickOnContent = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === ModalEnum.KEYBOARD_KEY_ESCAPE) {
            handleClose();
        }
    }, [handleClose]);

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            clearTimeout(delayRef.current);
        };
    }, [handleKeyDown, isOpen]);

    const mods = {
        [cls.opened]: isOpen,
        [cls.closing]: isClosing,
    };

    return (
        <Portal>
            <div data-testid="modal" className={classNames(cls.modal, mods, [className])}>
                <div className={cls.overlay} onClick={handleClose}>
                    <div className={cls.content} onClick={handleClickOnContent}>
                        {/* <CrossIcon className={cls.cross} onClick={handleClose} /> */}
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
