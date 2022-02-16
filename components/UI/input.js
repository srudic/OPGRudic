import styles from "../../styles/UI/Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.InputContainer}>
      <label htmlFor={props.name}>{props.title}</label>
      <input type={props.type} name={props.name} id={props.name} />
    </div>
  );
};

export default Input;
