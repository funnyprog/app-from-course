import { addDecorator } from '@storybook/react';
import { StyleDecorator, RouterDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
