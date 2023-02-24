import { ComponentMeta, ComponentStory } from '@storybook/react';
import { AppLinkThemesEnum, ThemeEnum } from 'shared/enums';
import { StyleDecorator } from 'shared/config/storybook';
import { AppLink } from './AppLink';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'AppLink',
    theme: AppLinkThemesEnum.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'AppLink',
    theme: AppLinkThemesEnum.SECONDARY,
};

export const Success = Template.bind({});
Success.args = {
    children: 'AppLink',
    theme: AppLinkThemesEnum.SUCCESS,
};

export const Danger = Template.bind({});
Danger.args = {
    children: 'AppLink',
    theme: AppLinkThemesEnum.DANGER,
};

export const DangerDark = Template.bind({});
DangerDark.args = {
    children: 'AppLink',
    theme: AppLinkThemesEnum.DANGER,
};
DangerDark.decorators = [StyleDecorator(ThemeEnum.DARK)];
