import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfileData } from 'entities/profile';
import { ProfileScheme, Profile } from '../types/ProfileScheme';

const initialState: ProfileScheme = {
    isLoading: false,
    error: undefined,
    data: undefined,
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
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchProfileData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchProfileData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            });
    },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
