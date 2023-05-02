import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';
import { Navbar } from './Navbar';

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({})];

export const UserLogged = Template.bind({});
UserLogged.args = {};
UserLogged.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: 1,
                username: 'user',
            },
        },
    }),
];
