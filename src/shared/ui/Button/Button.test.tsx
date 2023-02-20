import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { ButtonThemesEnum } from '../../enums';

const NAME = 'Test of Button component';

describe(NAME, () => {
    test('button text', () => {
        render(
            <Button>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button', () => {
        render(
            <Button theme={ButtonThemesEnum.CLEAR}>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
