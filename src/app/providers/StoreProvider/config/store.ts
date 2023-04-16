import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { loginFormReducer } from 'features/AuthByUsername';
import { StoreScheme } from '../types/StoreScheme';

const rootReducer: ReducersMapObject<StoreScheme> = {
    user: userReducer,
    loginForm: loginFormReducer,
};

export const configureReduxStore = (initialState?: StoreScheme) => configureStore<StoreScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
