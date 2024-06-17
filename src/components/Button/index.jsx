import P from 'prop-types';

import './styles.css';

export const Button = ({ text, onClick, isDisabled = false }) => (
  <button disabled={isDisabled} className="btn" onClick={onClick}>
    {text}
  </button>
);

Button.defaultProps = {
  isDisabled: false,
};

Button.propTypes = {
  text: P.string.isRequired,
  onClick: P.func.isRequired,
  isDisabled: P.bool,
};
