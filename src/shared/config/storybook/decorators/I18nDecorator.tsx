import { Story } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { StoryContextUpdate } from '@storybook/csf/dist/story';
import i18n from '../../i18n/i18n';

export const I18nDecorator = (Story: Story, { globals }: StoryContextUpdate) => {
    const { locale } = globals;

    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        <Suspense fallback="">
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
