import { Story } from '@storybook/react';
import 'app/styles/index.scss';
import { ThemeProvider } from 'app/providers';
import { ThemeEnum } from 'shared/enums';

export const ThemeDecorator = (theme: ThemeEnum) => (Story: Story) => (
    <ThemeProvider initialTheme={theme}>
        <Story />
    </ThemeProvider>
);
