import { ArgTypes } from '@storybook/blocks';
import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Alguma coisa para renderizar',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;
