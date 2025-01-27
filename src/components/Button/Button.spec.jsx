import { render, screen } from '@testing-library/react';
import { Button } from '.';
import userEvent from '@testing-library/user-event';

describe('<Button />', () => {
  it("should render the button with the text 'Load More'", () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="Load more" onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    userEvent.click(button);

    expect(fn).toHaveBeenCalledTimes(1);
  });
  it('should be disable with isDisable is true', () => {
    const fn = jest.fn();
    render(<Button text="Load more" isDisabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeDisabled();
  });
  it('should be enabled with isDisable is false', () => {
    const fn = jest.fn();
    render(<Button text="Load more" isDisabled={false} onClick={fn} />);
    const button = screen.getByRole('button', { name: /load more/i });

    expect(button).toBeEnabled();
  });
  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button text="Load more" isDisabled={false} onClick={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
