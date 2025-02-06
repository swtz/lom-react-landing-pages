import { GridSection } from '.';

export default {
  title: 'GridSection',
  component: GridSection,
  args: {
    children: 'GridSection',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
