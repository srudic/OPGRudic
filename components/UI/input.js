import { forwardRef } from "react";
import styles from "../../styles/UI/Input.module.css";

const Input = forwardRef((props, ref) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={props.name}>{props.title}</label>
      <input type={props.type} ref={ref} name={props.name} id={props.name} />
    </div>
  );
});

export default Input;
