import { GridImage } from '.';

export default {
  title: 'GridImage',
  component: GridImage,
  args: {
    children: 'GridImage',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridImage {...args} />
    </div>
  );
};
