import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers';
import { StoreScheme } from 'app/providers/StoreProvider/types/StoreScheme';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginFormReducer } from 'features/AuthByUsername';
import { ReducerList } from 'shared/lib';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginFormReducer,
};

export const StoreDecorator = (
    state: DeepPartial<StoreScheme>,
    asyncReducers?: ReducersMapObject<StoreScheme>,
) => (Story: Story) => (
    <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
    >
        <Story />
    </StoreProvider>
);
