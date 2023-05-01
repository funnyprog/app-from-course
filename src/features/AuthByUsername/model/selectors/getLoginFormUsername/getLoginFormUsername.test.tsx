import { StoreScheme } from 'app/providers';
import { DeepPartial } from '@reduxjs/toolkit';
import {
    getLoginFormUsername,
} from '../getLoginFormUsername/getLoginFormUsername';

const NAME = 'getLoginFormUsername selector testing';

describe(NAME, () => {
    test('should return false', () => {
        const state: DeepPartial<StoreScheme> = {
            loginForm: {
                username: 'user',
            },
        };

        expect(getLoginFormUsername(state as StoreScheme)).toEqual('user');
    });

    test('should return empty string', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getLoginFormUsername(state as StoreScheme)).toEqual('');
    });
});
