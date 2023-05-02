import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import {
    ReduxStoreWithManager,
    StoreSchemeKeys,
} from 'app/providers/StoreProvider/types/StoreScheme';
import { Reducer } from '@reduxjs/toolkit';
import { useAppDispatch } from 'shared/hooks';

export type ReducerList = {
    [name in StoreSchemeKeys]?: Reducer
}

type ReducerEntry = [StoreSchemeKeys, Reducer]

interface DynamicModuleLoaderProps {
    reducers: ReducerList
    removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const {
        children,
        reducers,
        removeAfterUnmount,
    } = props;
    const dispatch = useAppDispatch();
    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducerEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({ type: `@INIT ${name} reducer` });
        });

        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]: ReducerEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
        // eslint-disable-next-line
    }, []);
    return (
        // eslint-disable-next-line react/jsx-no-useless-fragment
        <>
            {children}
        </>
    );
};
