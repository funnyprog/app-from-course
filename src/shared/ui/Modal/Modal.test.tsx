import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';

const NAME = 'Test of Modal component';

describe(NAME, () => {
    test('modal text', () => {
        render(
            <Modal isOpen>TEST</Modal>,
        );
        expect(screen.getByTestId('modal')).toBeInTheDocument();
    });

    test('modal opened', () => {
        render(
            <Modal isOpen>TEST</Modal>,
        );
        expect(screen.getByTestId('modal')).toHaveClass('opened');
    });
});
