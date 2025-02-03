import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  args: {
    children: 'texto do MenuLink',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <MenuLink {...args} />;
