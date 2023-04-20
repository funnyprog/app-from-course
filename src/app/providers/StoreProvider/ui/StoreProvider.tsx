import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoreScheme } from '../types/StoreScheme';
import { configureReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: DeepPartial<StoreScheme>
    asyncReducers?: DeepPartial<ReducersMapObject<StoreScheme>>
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
        asyncReducers,
    } = props;

    const store = configureReduxStore(
        initialState as StoreScheme,
        asyncReducers as ReducersMapObject<StoreScheme>,
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
