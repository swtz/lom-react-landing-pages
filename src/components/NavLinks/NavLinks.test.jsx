import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';

describe('<NavLinks />', () => {
  it('should render', () => {
    renderTheme(<NavLinks>Children</NavLinks>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
