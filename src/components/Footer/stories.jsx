import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
  args: {
    html: `<a rel="nofollow" target="_blank" href="https://github.com/swtz">Feito com ❤️ por L.Lüders</a>`,
  },
};

export const Template = (args) => {
  return (
    <div>
      <Footer {...args} />
    </div>
  );
};
