import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground } from '.';

describe('<SectionBackground />', () => {
  it('should render with background dark', () => {
    const { container } = renderTheme(
      <SectionBackground background>
        <h1>leonarthinker</h1>
      </SectionBackground>,
    );
    expect(
      screen.getByRole('heading', { name: 'leonarthinker' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render with background light', () => {
    const { container } = renderTheme(
      <SectionBackground>
        <h1>leonarthinker</h1>
      </SectionBackground>,
    );
    expect(
      screen.getByRole('heading', { name: 'leonarthinker' }),
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
