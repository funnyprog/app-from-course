import { addDecorator } from '@storybook/react';
import {
    StyleDecorator,
    RouterDecorator,
    I18nDecorator,
} from 'shared/config/storybook';
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

export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', title: 'English' },
                { value: 'ru', title: 'Русский' },
            ],
            showName: true,
        },
    },
};

addDecorator(StyleDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
addDecorator(I18nDecorator);
