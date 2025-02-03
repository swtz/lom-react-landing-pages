import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

import mock from './mock';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toHaveLength(mock.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render correct flex-flow when using mobile', () => {
    const { container } = renderTheme(<NavLinks links={mock} />);
    const nav = container.querySelector('nav');
    expect(nav).toHaveStyleRule('flex-flow', 'column wrap', {
      media: theme.media.lteMedium,
    });
  });

  it('should match snapshot', () => {
    renderTheme(<NavLinks links={mock} />);
    expect(screen.getAllByRole('link')).toMatchSnapshot();
  });
});
