import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';
import { screen } from '@testing-library/react';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumns>Children</GridTwoColumns>);
    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
  });
});
