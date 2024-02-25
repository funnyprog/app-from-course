import { createSlice } from '@reduxjs/toolkit';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { ProfileScheme } from '../types/ProfileScheme';

const initialState: ProfileScheme = {
    isLoading: false,
    error: undefined,
    data: undefined,
    readonly: false,
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        markReadonly: (state) => {
            state.readonly = true;
        },
        unmarkReadonly: (state) => {
            state.readonly = false;
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
