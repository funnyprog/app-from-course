import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nTests from 'i18nTests';

export const renderWithTranslation = (component: ReactNode) => render(
    <I18nextProvider i18n={i18nTests}>
        {component}
    </I18nextProvider>,
);
