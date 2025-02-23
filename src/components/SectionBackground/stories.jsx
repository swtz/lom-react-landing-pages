import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>SectionBackground</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto itaque
          consequuntur laborum dolor facere rem voluptas commodi ullam, non,
          eius eos doloribus debitis nostrum? Obcaecati accusantium a suscipit
          ab ea.
        </p>
      </div>
    ),
  },
  argsTypes: {
    children: { disable: true },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
