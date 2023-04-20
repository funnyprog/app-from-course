import { classNames, DynamicModuleLoader, ReducerList } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getLoginFormIsLoading,
    getLoginFormPassword,
    getLoginFormUsername,
} from '../../model/selectors/loginFormSelectors';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginFormActions, loginFormReducer } from '../../model/slice/loginFormSlice';
import cls from './LoginForm.module.scss';

const reducers: ReducerList = {
    loginForm: loginFormReducer,
};

interface LoginFormProps {
    className?: string
}

const LoginForm = memo((props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginFormUsername);
    const password = useSelector(getLoginFormPassword);
    const isLoading = useSelector(getLoginFormIsLoading);

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
        <DynamicModuleLoader
            reducers={reducers}
            removeAfterUnmount
        >
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
        </DynamicModuleLoader>
    );
});

export default LoginForm;
