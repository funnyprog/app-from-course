import { UserScheme } from 'entities/user';
import { LoginFormScheme } from 'features/AuthByUsername';

export interface StoreScheme {
    user: UserScheme
    loginForm: LoginFormScheme
}
