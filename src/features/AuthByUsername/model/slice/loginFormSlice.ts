import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormScheme } from '../types/LoginFormScheme';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginFormScheme = {
    isLoading: false,
    error: null,
    username: '',
    password: '',
};

export const loginFormSlice = createSlice({
    name: 'loginForm',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error;
            });
    },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
