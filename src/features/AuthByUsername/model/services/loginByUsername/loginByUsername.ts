import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/user';
import { LocalStorageKeysEnum } from 'shared/enums';
import { ThunkApiExtraArgs } from 'app/providers';

interface LoginByUsernameProps {
    username: string
    password: string
}

interface ThunkOptions {
    extra: ThunkApiExtraArgs
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkOptions>(
    'loginForm/loginByUsername',
    async (authData, thunkAPI) => {
        const { dispatch, extra, rejectWithValue } = thunkAPI;
        try {
            const response = await extra.api.post('/login', authData);

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(LocalStorageKeysEnum.USER, JSON.stringify(response.data));
            dispatch(userActions.setAuthData(response.data));

            return response.data;
        } catch (err) {
            return rejectWithValue('error');
        }
    },
);
