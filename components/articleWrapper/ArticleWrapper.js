import styles from "../../styles/ArticleWrapper.module.css";

const ArticleWrapper = (props) => {
  return (
    <div className={styles.ArticleWrapper}>
      {props.children[0]}
      <div className={styles.line}></div>
      {props.children[1]}
    </div>
  );
};

export default ArticleWrapper;
