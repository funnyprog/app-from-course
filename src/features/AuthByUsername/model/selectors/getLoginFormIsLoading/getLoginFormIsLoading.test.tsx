import { StoreScheme } from 'app/providers';
import { DeepPartial } from '@reduxjs/toolkit';
import {
    getLoginFormIsLoading,
} from '../getLoginFormIsLoading/getLoginFormIsLoading';

const NAME = 'getLoginFormIsLoading selector testing';

describe(NAME, () => {
    test('should return false', () => {
        const state: DeepPartial<StoreScheme> = {
            loginForm: {
                isLoading: false,
            },
        };

        expect(getLoginFormIsLoading(state as StoreScheme)).toEqual(false);
    });

    test('should return false when no state', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getLoginFormIsLoading(state as StoreScheme)).toEqual(false);
    });

    test('should return true', () => {
        const state: DeepPartial<StoreScheme> = {
            loginForm: {
                isLoading: true,
            },
        };

        expect(getLoginFormIsLoading(state as StoreScheme)).toEqual(true);
    });
});
