import style from "../../styles/UI/Button.module.css";

const Button = (props) => {
  return (
    <button className={style.button} onClick={props.clicked}>
      {props.title}
    </button>
  );
};

export default Button;
