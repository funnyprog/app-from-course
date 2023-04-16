import { ComponentMeta, ComponentStory } from '@storybook/react';
import { TextEnum, ThemeEnum } from 'shared/enums';
import { ThemeDecorator } from 'shared/config/storybook';
import { Text } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    title: 'This is title',
    text: 'Description of title',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'This is title',
    text: 'Description of title',
};
PrimaryDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    title: 'This is title',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'This is title',
};
OnlyTitleDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    text: 'Description of title',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Description of title',
};
OnlyTextDark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
