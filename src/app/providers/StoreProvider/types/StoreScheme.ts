import { UserScheme } from 'entities/user';
import { LoginFormScheme } from 'features/AuthByUsername';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { configureReduxStore } from 'app/providers/StoreProvider/config/store';
import { ProfileScheme } from 'entities/profile';

export interface StoreScheme {
    user: UserScheme

    // async reducers
    loginForm?: LoginFormScheme
    profile?: ProfileScheme
}

export type StoreSchemeKeys = keyof StoreScheme

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StoreScheme>
    reduce: (state: StoreScheme, action: AnyAction) => CombinedState<StoreScheme>
    add: (key: StoreSchemeKeys, reducer: Reducer) => void
    remove: (key: StoreSchemeKeys) => void
}

export interface ReduxStoreWithManager extends EnhancedStore<StoreScheme> {
    reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof configureReduxStore>['dispatch']
