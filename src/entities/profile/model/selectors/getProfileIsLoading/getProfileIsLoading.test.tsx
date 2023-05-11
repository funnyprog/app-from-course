import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers';
import { getProfileIsLoading } from './getProfileIsLoading';

const NAME = 'getProfileIsLoading selector testing';

describe(NAME, () => {
    test('should return isLoading true', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                isLoading: true,
            },
        };

        expect(getProfileIsLoading(state as StoreScheme)).toEqual(true);
    });

    test('should return false when state is empty', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getProfileIsLoading(state as StoreScheme)).toEqual(false);
    });

    test('should return isLoading false', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                isLoading: false,
            },
        };

        expect(getProfileIsLoading(state as StoreScheme)).toEqual(false);
    });
});
