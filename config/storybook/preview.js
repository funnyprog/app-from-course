import { addDecorator } from '@storybook/react';
import { StyleDecorator, RouterDecorator, ThemeDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';
import i18n from './i18next.js';

export const parameters = {
    i18n,
    locale: 'ru',
    locales: {
        ru: 'Русский',
        en: 'English',
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

addDecorator(StyleDecorator);
addDecorator(ThemeDecorator(ThemeEnum.LIGHT));
addDecorator(RouterDecorator);
