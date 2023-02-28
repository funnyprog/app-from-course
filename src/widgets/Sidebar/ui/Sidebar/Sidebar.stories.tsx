import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';
import { ThemeDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
