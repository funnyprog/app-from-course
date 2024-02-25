import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers';
import { getProfileReadonly } from './getProfileReadonly';

const NAME = 'getProfileReadonly selector testing';

describe(NAME, () => {
    test('should return readonly true', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                readonly: true,
            },
        };

        expect(getProfileReadonly(state as StoreScheme)).toEqual(true);
    });

    test('should return readonly false', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                readonly: false,
            },
        };

        expect(getProfileReadonly(state as StoreScheme)).toEqual(false);
    });
});
