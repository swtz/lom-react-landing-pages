import "./styles.css";

export const Button = ({ text, onClick, isDisable }) => {
  return (
    <>
      <button disabled={isDisable} className="btn" onClick={onClick}>
        {text}
      </button>
    </>
  );
};
