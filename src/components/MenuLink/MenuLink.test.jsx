import { MenuLink } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<MenuLink />', () => {
  it('should render correct anchor element', () => {
    const { container } = renderTheme(<MenuLink>link</MenuLink>);
    const a = container.querySelector('a');
    expect(a.tagName.toLowerCase()).toBe('a');
  });
});
