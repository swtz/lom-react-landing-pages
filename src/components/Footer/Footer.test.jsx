import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render anchor element', () => {
    renderTheme(<Footer html={'<h1>Children</h1>'} />);
    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
  });
});
