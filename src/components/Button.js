import "./Button.css";

const Button = ({ className, value, onClick }) => {
  // console.log("button render")
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>

  );
};

export default Button;
