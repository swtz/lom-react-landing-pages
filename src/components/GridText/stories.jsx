import { GridText } from '.';
import mock from './mock';

export default {
  title: 'GridText',
  component: GridText,
  args: mock,
};

export const Light = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

export const Dark = (args) => {
  return (
    <div>
      <GridText {...args} />
    </div>
  );
};

Dark.args = {
  background: true,
};
