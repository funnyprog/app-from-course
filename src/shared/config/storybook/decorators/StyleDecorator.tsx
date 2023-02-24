import { ThemeEnum } from 'shared/enums';
import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (theme: ThemeEnum) => (Story: Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
