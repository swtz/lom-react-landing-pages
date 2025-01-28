import P from 'prop-types';

export const Button = ({ text, onButtonClick }) => {
  return <button onClick={onButtonClick}>{text}</button>;
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
};
