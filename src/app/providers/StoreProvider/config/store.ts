import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { StoreScheme } from '../types/StoreScheme';

const rootReducer: ReducersMapObject<StoreScheme> = {
    user: userReducer,
};

export const configureReduxStore = (initialState?: StoreScheme) => configureStore<StoreScheme>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
});
