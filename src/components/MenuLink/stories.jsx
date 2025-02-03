import { MenuLink } from '.';

export default {
  title: 'MenuLink',
  args: {
    children: 'texto do MenuLink',
    link: 'https://github.com/swtz',
  },
  argTypes: {
    children: { type: 'string' },
    link: { type: 'string' },
    newTab: { type: 'boolean' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLink {...args} />
    </div>
  );
};
