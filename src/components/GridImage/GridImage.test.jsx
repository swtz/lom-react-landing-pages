import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';
import mock from './mock';

describe('<GridText />', () => {
  it('should render grid component', () => {
    const { container } = renderTheme(<GridImage {...mock} />);
    expect(container).toMatchSnapshot();
  });

  it('should render grid component without background', () => {
    const { container } = renderTheme(
      <GridImage {...mock} background={undefined} />,
    );
    expect(container).toMatchSnapshot();
  });
});
