import { StoreScheme } from 'app/providers';
import { DeepPartial } from '@reduxjs/toolkit';
import {
    getLoginFormPassword,
} from '../getLoginFormPassword/getLoginFormPassword';

const NAME = 'getLoginFormPassword selector testing';

describe(NAME, () => {
    test('should return false', () => {
        const state: DeepPartial<StoreScheme> = {
            loginForm: {
                password: '123321',
            },
        };

        expect(getLoginFormPassword(state as StoreScheme)).toEqual('123321');
    });

    test('should return empty string', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getLoginFormPassword(state as StoreScheme)).toEqual('');
    });
});
