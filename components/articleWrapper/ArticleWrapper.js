import styles from "../../styles/ArticleWrapper.module.css";

const ArticleWrapper = (props) => {
  return (
    <div className={styles.titleContainer}>
      {props.title && <h2>{props.title}</h2>}
      {props.subtitle && <h3>{props.subtitle}</h3>}
      <div className={styles.articleWrapper}>
        {props.children[0]}
        <div className={styles.line}></div>
        {props.children[1]}
      </div>
    </div>
  );
};

export default ArticleWrapper;
