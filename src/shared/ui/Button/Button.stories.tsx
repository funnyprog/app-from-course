import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonThemesEnum, ThemeEnum } from 'shared/enums';
import { StyleDecorator } from 'shared/config/storybook';
import { Button } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Button',
    theme: ButtonThemesEnum.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: 'Button',
    theme: ButtonThemesEnum.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonThemesEnum.OUTLINE,
};
OutlineDark.decorators = [StyleDecorator(ThemeEnum.DARK)];
