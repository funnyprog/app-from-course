import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { userReducer } from 'entities/user';
import { api } from 'shared/api';
import { NavigateOptions } from 'react-router';
import { To } from 'react-router-dom';
import { createReducerManager } from './reducerManager';
import { StoreScheme } from '../types/StoreScheme';

export const configureReduxStore = (
    initialState?: StoreScheme,
    asyncReducers?: ReducersMapObject<StoreScheme>,
    navigate?: (to: To, options?: NavigateOptions) => void,
) => {
    const rootReducer: ReducersMapObject<StoreScheme> = {
        ...asyncReducers,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducer);

    const extraArgs = {
        api,
        navigate,
    };

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: extraArgs,
            },
        }),
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
};
