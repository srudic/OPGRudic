import styles from "../../styles/ArticleItem.module.css";

const ArticleItem = (props) => {
  let currentClass = [styles.itemContainer];
  if (props.src) {
    currentClass.push(styles.center);
  }
  return (
    <div className={currentClass.join(" ")}>
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.title}>{props.title}</div>
      {props.src && <img src={props.src} />}
    </div>
  );
};

export default ArticleItem;
