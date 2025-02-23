import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render string passed to html prop as html', () => {
    const { container } = renderTheme(
      <Footer footerHtml={'<h1>Children</h1>'} />,
    );
    expect(
      screen.getByRole('heading', { name: 'Children' }),
    ).toBeInTheDocument();
    expect(container).toMatchInlineSnapshot(`
      .c4 {
        font-size: 2.4rem;
      }

      .c2 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
        width: 100%;
      }

      .c0 {
        text-align: center;
        border-top: 0.1rem solid #DDDDDD;
      }

      .c0 a {
        color: inherit;
        -webkit-text-decoration: none;
        text-decoration: none;
      }

      .c0 .c3 {
        font-size: 1.6rem;
      }

      .c0 .c1 {
        padding-top: 1.6rem;
        padding-bottom: 1.6rem;
      }

      @media (max-width:768px) {
        .c2 {
          padding: 1.6rem;
        }
      }

      @media (max-width:414px) {
        .c2 {
          padding: .8rem;
        }
      }

      <div>
        <div
          class="c0"
        >
          <div
            class="c1 c2"
          >
            <div
              class="c3 c4"
            >
              <h1>
                Children
              </h1>
            </div>
          </div>
        </div>
      </div>
    `);
  });
});
