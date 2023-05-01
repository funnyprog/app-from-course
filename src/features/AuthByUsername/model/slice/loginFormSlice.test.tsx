import { loginFormReducer } from '../slice/loginFormSlice';
import { LoginFormScheme } from '../types/LoginFormScheme';
import { loginFormActions } from '../../model/slice/loginFormSlice';

const NAME = 'loginFormSlice testing';

describe(NAME, () => {
    test('setUsername test', () => {
        const state = {
            username: 'user',
        };

        expect(loginFormReducer(state as LoginFormScheme, loginFormActions.setUsername('user 2')))
            .toEqual({ username: 'user 2' });
    });

    test('setPassword test', () => {
        const state = {
            password: '123456',
        };

        expect(loginFormReducer(state as LoginFormScheme, loginFormActions.setPassword('321123')))
            .toEqual({ password: '321123' });

        expect(loginFormReducer(state as LoginFormScheme, loginFormActions.setPassword('321123')))
            .not.toEqual({ password: '123456' });
    });
});
