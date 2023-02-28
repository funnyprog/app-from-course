import { Story } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator = (Story: Story) => (
    <div className="app">
        <Story />
    </div>
);
