import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur 
    adipisicing elit. Ipsa beatae voluptate quod rem quisquam 
    id illo ea voluptatum quidem enim autem, voluptatem necessitatibus 
    vel, a veritatis debitis porro, nam eveniet?`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => (
  <div>
    <TextComponent {...args} />
  </div>
);
