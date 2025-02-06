import { GridTwoColumns } from '.';
import mock from './mock';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: mock,
};

export const Light = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);

export const Dark = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);

Dark.args = {
  background: true,
};
