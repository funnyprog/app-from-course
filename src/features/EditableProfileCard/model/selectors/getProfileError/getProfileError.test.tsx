import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers';
import { getProfileError } from './getProfileError';

const NAME = 'getProfileError selector testing';

describe(NAME, () => {
    test('should return error', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                error: 'error',
            },
        };

        expect(getProfileError(state as StoreScheme)).toBe('error');
    });

    test('should return empty state value', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getProfileError(state as StoreScheme)).toEqual(undefined);
    });
});
