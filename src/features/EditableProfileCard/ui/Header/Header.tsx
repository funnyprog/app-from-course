import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from 'shared/lib';
import { Button, Text } from 'shared/ui';
import { ButtonThemesEnum } from 'shared/enums';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from 'shared/hooks';
import { profileActions } from '../../model/slice/profileSlice';
import cls from './Header.module.scss';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';

interface HeaderProps {
    className?: string
}

export const Header = memo((props: HeaderProps) => {
    const { className } = props;

    const { t } = useTranslation('profile');
    const dispatch = useAppDispatch();
    const readonly = useSelector(getProfileReadonly);

    const handleEdit = useCallback(() => {
        dispatch(profileActions.markReadonly());
    }, [dispatch]);

    const handleCancelEdit = useCallback(() => {
        dispatch(profileActions.unmarkReadonly());
    }, [dispatch]);

    let buttons;
    if (readonly) {
        buttons = (
            <>
                <Button theme={ButtonThemesEnum.OUTLINE} onClick={handleCancelEdit}>
                    {t('Отменить')}
                </Button>
                <Button theme={ButtonThemesEnum.OUTLINE} onClick={handleCancelEdit}>
                    {t('Сохранить')}
                </Button>
            </>
        );
    } else {
        buttons = (
            <Button theme={ButtonThemesEnum.OUTLINE} onClick={handleEdit}>
                {t('Редактировать')}
            </Button>
        );
    }

    return (
        <div className={classNames(cls.header, {}, [className])}>
            <Text title={t('ProfilePage.card.header.text')} />
            <div className={cls.buttons}>
                {buttons}
            </div>
        </div>
    );
});
