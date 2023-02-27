import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import { i18nForTests } from 'shared/config/i18nForTests';

export const renderWithTranslation = (component: ReactNode) => render(
    <I18nextProvider i18n={i18nForTests}>
        <MemoryRouter>
            {component}
        </MemoryRouter>
    </I18nextProvider>,
);
