const Button = ({ text, onClick, className, title }) => {
  return (
    <button
      className={`${className}`}
      onClick={onClick}
      title={title}
      aria-label={title}
    >
      {text}
    </button>
  );
};

export default Button;
