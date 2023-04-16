import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { DeepPartial } from '@reduxjs/toolkit';
import { StoreScheme } from '../types/StoreScheme';
import { configureReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: DeepPartial<StoreScheme>
}

export const StoreProvider: FC<StoreProviderProps> = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = configureReduxStore(initialState as StoreScheme);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
