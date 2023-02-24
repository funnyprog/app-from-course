import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from 'widgets/Sidebar';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: 'Button',
};

export const Dark = Template.bind({});
Dark.args = {
    children: 'Button',
};
