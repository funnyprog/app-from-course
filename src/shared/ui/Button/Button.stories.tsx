import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ButtonSizeEnum, ButtonThemesEnum, ThemeEnum } from 'shared/enums';
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

export const OutlineSizeL = Template.bind({});
OutlineSizeL.args = {
    children: 'Button',
    theme: ButtonThemesEnum.OUTLINE,
    size: ButtonSizeEnum.L,
};

export const OutlineSizeXL = Template.bind({});
OutlineSizeXL.args = {
    children: 'Button',
    theme: ButtonThemesEnum.OUTLINE,
    size: ButtonSizeEnum.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Button',
    theme: ButtonThemesEnum.OUTLINE,
};
OutlineDark.decorators = [StyleDecorator(ThemeEnum.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Button',
    theme: ButtonThemesEnum.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Button',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizeEnum.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizeEnum.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSizeEnum.XL,
};

export const SizeM = Template.bind({});
SizeM.args = {
    children: 'Button',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.M,
};

export const SizeL = Template.bind({});
SizeL.args = {
    children: 'Button',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.L,
};

export const SizeXL = Template.bind({});
SizeXL.args = {
    children: 'Button',
    theme: ButtonThemesEnum.BACKGROUND_INVERTED,
    size: ButtonSizeEnum.XL,
};
