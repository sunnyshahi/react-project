function Button({ color, text }) {
  const onClickAlert = (details) => {
    console.log(details);
  };
  return (
    <button
      onClick={onClickAlert}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

Button.defaultProps = {
  color: "green",
  text: "Test Button",
};

export default Button;
