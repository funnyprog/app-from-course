import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator, StoreDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';
import LoginForm from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK), StoreDecorator({})];

export const IsLoading = Template.bind({});
IsLoading.args = {
    isOpen: true,
};
IsLoading.decorators = [StoreDecorator({
    loginForm: {
        isLoading: true,
    },
})];

export const IsLoadingDark = Template.bind({});
IsLoadingDark.args = {
    isOpen: true,
};
IsLoadingDark.decorators = [
    ThemeDecorator(ThemeEnum.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
