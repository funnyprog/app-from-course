import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui';
import { ButtonThemesEnum } from '../../enums';

const NAME = 'Test of Button component';

describe(NAME, () => {
    test('button text', () => {
        render(
            // eslint-disable-next-line i18next/no-literal-string
            <Button>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('button', () => {
        render(
            // eslint-disable-next-line i18next/no-literal-string
            <Button theme={ButtonThemesEnum.CLEAR}>TEST</Button>,
        );
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
