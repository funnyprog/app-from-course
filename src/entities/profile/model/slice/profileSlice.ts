import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProfileScheme, Profile } from '../types/ProfileScheme';

const initialState: ProfileScheme = {
    isLoading: false,
    error: null,
    profileData: null,
    readonly: true,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {

        },
        initAuthData: (state) => {

        },
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
