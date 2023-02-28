import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';
import { LoadingPage } from './LoadingPage';

export default {
    title: 'pages/LoadingPage',
    component: LoadingPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoadingPage>;

const Template: ComponentStory<typeof LoadingPage> = (args) => <LoadingPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
