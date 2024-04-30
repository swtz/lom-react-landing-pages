import "./styles.css";

export const Button = ({ text, onClick, isDisabled }) => (
  <button disabled={isDisabled} className="btn" onClick={onClick}>
    {text}
  </button>
);
