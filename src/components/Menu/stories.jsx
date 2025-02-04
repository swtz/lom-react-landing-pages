import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    children: 'Menu',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
