import ArticleWrapper from "../articleWrapper/ArticleWrapper";
import styles from "../../styles/BlogTitles.module.css";

const BlogTitles = () => {
  return (
    <div className={styles.blogs}>
      <div className={styles.blogTitle}>
        <div className={styles.year}>2021.</div>
        <div className={styles.title}>
          Proglašenje najboljeg ulja u sedam Kaštela
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.blogTitle}>
        <div className={styles.year}>2021.</div>
        <div className={styles.title}>
          Urod ipak nije propao - “Bit će dovoljno za cijelu obitelj, ostat će i
          za...”
        </div>
      </div>
    </div>
  );
};

export default BlogTitles;
