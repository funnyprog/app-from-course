import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/renderWithTranslation/renderWithTranslation';
import { Sidebar } from './Sidebar';

const NAME = 'Test of Sidebar component';

describe(NAME, () => {
    test('render', () => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('collapse switcher', () => {
        renderWithTranslation(<Sidebar />);
        const collapseSwitcher = screen.getByTestId('collapse_switcher');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(collapseSwitcher);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
