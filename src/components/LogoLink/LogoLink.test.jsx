import { LogoLink } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<LogoLink />', () => {
  it('should render', () => {
    const { container } = renderTheme(<LogoLink>Children</LogoLink>);
    expect(container.firstChild).toHaveStyle({
      color: theme.colors.primaryColor,
    });
  });
});
