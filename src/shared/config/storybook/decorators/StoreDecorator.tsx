import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { StoreProvider } from 'app/providers';
import { StoreScheme } from 'app/providers/StoreProvider/types/StoreScheme';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StoreScheme>) => (Story: Story) => (
    <StoreProvider initialState={state}>
        <Story />
    </StoreProvider>
);
