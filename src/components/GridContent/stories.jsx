import { GridContent } from '.';
import mock from './mock';

export default {
  title: 'GridContent',
  component: GridContent,
  args: mock,
};

export const Light = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

export const Dark = (args) => {
  return (
    <div>
      <GridContent {...args} />
    </div>
  );
};

Dark.args = {
  background: true,
};
