import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers';
import { getLoginFormError } from '../getLoginFormError/getLoginFormError';

const NAME = 'getLoginFormError selector testing';
describe(NAME, () => {
    test('should return error', () => {
        const state: DeepPartial<StoreScheme> = {
            loginForm: {
                error: 'error',
            },
        };
        expect(getLoginFormError(state as StoreScheme)).toBe('error');
    });

    test('should return empty state value', () => {
        const state: DeepPartial<StoreScheme> = {};
        expect(getLoginFormError(state as StoreScheme)).toEqual(undefined);
    });
});
