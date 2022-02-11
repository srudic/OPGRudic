import styles from "../../styles/ArticleItem.module.css";

const ArticleItem = (props) => {
  return (
    <div className={styles.ItemContainer}>
      <div className={styles.year}>{props.year}</div>
      <div className={styles.title}>{props.title}</div>
    </div>
  );
};

export default ArticleItem;
