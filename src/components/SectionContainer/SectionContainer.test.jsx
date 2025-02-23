import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionContainer } from '.';

describe('<SectionContainer />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <SectionContainer>
        <h1>Children</h1>
      </SectionContainer>,
    );
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      @media (max-width:768px) {
        .c0 {
          padding: 1.6rem;
        }
      }

      @media (max-width:414px) {
        .c0 {
          padding: .8rem;
        }
      }

      <div
        class="c0"
      >
        <h1>
          Children
        </h1>
      </div>
    `);
  });
});
