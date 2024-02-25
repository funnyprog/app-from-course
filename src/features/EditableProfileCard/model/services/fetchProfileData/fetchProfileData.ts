import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiExtraArgs } from 'app/providers';
import { ProfileData } from 'shared/types';

interface ThunkOptions {
    extra: ThunkApiExtraArgs
}

export const fetchProfileData = createAsyncThunk<ProfileData, void, ThunkOptions>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<ProfileData>('/profile');

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
