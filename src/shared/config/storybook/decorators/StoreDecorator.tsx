import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreProvider, StoreScheme } from 'app/providers';
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { loginFormReducer } from 'features/AuthByUsername';
import { profileReducer } from 'features/EditableProfileCard';
import { ReducerList } from 'shared/lib';

const defaultAsyncReducers: ReducerList = {
    loginForm: loginFormReducer,
    profile: profileReducer,
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
