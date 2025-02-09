import { renderTheme } from '../../styles/render-theme';
import { GridText } from '.';
import mock from './mock';
import { screen } from '@testing-library/react';

describe('<GridText />', () => {
  it('should render grid component', () => {
    renderTheme(<GridText {...mock} />);
    expect(
      screen.getByRole('heading', { name: 'My grid' }),
    ).toBeInTheDocument();
  });

  it('should render grid component without background', () => {
    renderTheme(<GridText {...mock} background={undefined} />);
  });
});
