import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { createReducerManager } from './reducerManager';
import { ReduxStoreWithManager, StoreScheme } from '../types/StoreScheme';

const rootReducer: ReducersMapObject<StoreScheme> = {
    user: userReducer,
};

export const configureReduxStore = (initialState?: StoreScheme) => {
    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StoreScheme>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    }) as ReduxStoreWithManager;

    store.reducerManager = reducerManager;

    return store;
};
