import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>content</TextComponent>);
    expect(screen.getByText('content')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent>content</TextComponent>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        content
      </div>
    `);
  });

  it('should render correct font-size', () => {
    renderTheme(<TextComponent>content</TextComponent>);
    expect(screen.getByText('content')).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
  });

  it('should render correct paragraph element', () => {
    const { container } = renderTheme(<TextComponent>content</TextComponent>);
    const div = container.querySelector('div');
    expect(div.tagName.toLowerCase()).toBe('div');
  });
});
