import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkApiExtraArgs } from 'app/providers';
import { Profile } from '../../types/ProfileScheme';

interface ThunkOptions {
    extra: ThunkApiExtraArgs
}

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkOptions>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const { extra, rejectWithValue } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>('/profile');

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
