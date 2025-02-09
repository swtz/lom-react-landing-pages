import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Base } from '.';
import { mockBase } from './mock';

describe('<Base />', () => {
  it('should render', () => {
    renderTheme(<Base {...mockBase} />);
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
  });
});
