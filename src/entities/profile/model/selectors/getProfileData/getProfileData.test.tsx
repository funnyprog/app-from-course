import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from 'app/providers';
import { getProfileData } from './getProfileData';

const NAME = 'getProfileData selector testing';

describe(NAME, () => {
    const profileData = {
        firstname: 'Pablo',
        lastname: 'Picasso',
        username: 'funnyprog',
        age: 23,
        avatar: 'test string',
        city: 'Rostov',
        country: 'Russia',
        currency: 'RUB',
    };

    test('should return profile data', () => {
        const state: DeepPartial<StoreScheme> = {
            profile: {
                data: profileData,
            },
        };

        expect(typeof getProfileData(state as StoreScheme)).toBe('object');
        expect(getProfileData(state as StoreScheme)).toEqual(profileData);
    });

    test('should return empty state value', () => {
        const state: DeepPartial<StoreScheme> = {};

        expect(getProfileData(state as StoreScheme)).toEqual(undefined);
    });
});
