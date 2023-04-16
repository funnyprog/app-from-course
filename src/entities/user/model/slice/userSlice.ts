import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LocalStorageKeysEnum } from 'shared/enums';
import { User, UserScheme } from '../types/UserScheme';

const initialState: UserScheme = {};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LocalStorageKeysEnum.USER);
            if (user) {
                state.authData = JSON.parse(user);
            }
        },
        logout: (state) => {
            localStorage.removeItem(LocalStorageKeysEnum.USER);
            state.authData = null;
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
