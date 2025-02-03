import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    children: 'Hello, LogoLink!',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <LogoLink {...args} />;
