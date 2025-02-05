import { background } from 'storybook/internal/theming';
import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque libero fugiat nobis corporis quos enim ea molestias modi et, exercitationem ab a praesentium est numquam recusandae sit, omnis similique asperiores.`,
    srcImg: 'assets/images/javascript.svg',
  },
};

export const Template = (args) => (
  <div>
    <GridTwoColumns {...args} />
  </div>
);
