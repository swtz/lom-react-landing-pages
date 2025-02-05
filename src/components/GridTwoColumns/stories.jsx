import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    children: 'Hello, GridTwoColumns!',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);
