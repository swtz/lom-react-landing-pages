import { Base } from '.';

export default {
  title: 'Base',
  component: Base,
  args: {
    children: 'Base',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
