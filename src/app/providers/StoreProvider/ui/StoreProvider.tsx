import React, { FC, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { StoreScheme } from '../types/StoreScheme';
import { configureReduxStore } from '../config/store';

interface StoreProviderProps {
    children: ReactNode,
    initialState?: StoreScheme
}

export const StoreProvider: FC = (props: StoreProviderProps) => {
    const {
        children,
        initialState,
    } = props;

    const store = configureReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
