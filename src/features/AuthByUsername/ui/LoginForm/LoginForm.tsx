import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getLoginFormState } from '../../model/selectors/getLoginFormState/getLoginFormState';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginFormActions } from '../../model/slice/loginFormSlice';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, isLoading,
    } = useSelector(getLoginFormState);

    const handleChangeUsername = useCallback((value: string) => {
        dispatch(loginFormActions.setUsername(value));
    }, [dispatch]);

    const handleChangePassword = useCallback((value: string) => {
        dispatch(loginFormActions.setPassword(value));
    }, [dispatch]);

    const handleLogin = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                placeholder={t('features.AuthByUsername.LoginForm.firstInput.text')}
                type="text"
                onChange={handleChangeUsername}
                value={username}
            />
            <Input
                placeholder={t('features.AuthByUsername.LoginForm.secondInput.text')}
                type="text"
                onChange={handleChangePassword}
                value={password}
            />
            <Button
                onClick={handleLogin}
                disabled={isLoading}
                withLoader={isLoading}
            >
                {t('features.AuthByUsername.LoginForm.button.text')}
            </Button>
        </div>
    );
});
