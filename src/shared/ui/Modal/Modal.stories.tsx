import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook';
import { ThemeEnum } from 'shared/enums';
import { Modal } from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        children: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aspernatur consectetur cupiditate deserunt dolore, doloremque enim excepturi expedita hic ipsum modi molestias non perspiciatis provident repudiandae sequi suscipit tempore voluptas.\n',
        isOpen: true,
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(ThemeEnum.DARK)];
