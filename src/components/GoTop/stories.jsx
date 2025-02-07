import { GoTop } from '.';

export default {
  title: 'GoTop',
  component: GoTop,
  args: {
    children: 'GoTop',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        labore dicta at minima accusamus, velit ut rem sunt atque modi amet
        saepe ratione accusantium corporis eum, assumenda et laudantium
        dignissimos.
      </p>
      <GoTop {...args} />
    </div>
  );
};
