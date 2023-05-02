import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { createReducerManager } from './reducerManager';
import { StoreScheme } from '../types/StoreScheme';

export const configureReduxStore = (
    initialState?: StoreScheme,
    asyncReducers?: ReducersMapObject<StoreScheme>,
) => {
    const rootReducer: ReducersMapObject<StoreScheme> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore<StoreScheme>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
