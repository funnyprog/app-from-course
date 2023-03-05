import { classNames } from 'shared/lib';
import { useTranslation } from 'react-i18next';
import { Button, Input } from 'shared/ui';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                placeholder={t('features.AuthByUsername.LoginForm.firstInput.text')}
                type="text"
            />
            <Input
                placeholder={t('features.AuthByUsername.LoginForm.secondInput.text')}
                type="text"
            />
            <Button>
                {t('features.AuthByUsername.LoginForm.button.text')}
            </Button>
        </div>
    );
};
