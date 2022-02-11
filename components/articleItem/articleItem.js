import styles from "../../styles/ArticleItem.module.css";

const ArticleItem = (props) => {
  let currentClass = [styles.itemContainer];
  if (props.img) {
    currentClass.push(styles.center);
  }
  return (
    <div className={currentClass.join(" ")}>
      <div className={styles.subtitle}>{props.subtitle}</div>
      <div className={styles.title}>{props.title}</div>
      {props.img && <img src={props.src} />}
    </div>
  );
};

export default ArticleItem;
