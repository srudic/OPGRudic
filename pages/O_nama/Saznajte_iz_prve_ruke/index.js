import BlogWrapper from "../../../components/blog/blogWrapper";
import Filter from "../../../components/blog/filter";

import styles from "../../../styles/Blog/Blog.module.css";

const FromFirstHandPage = () => {
  return (
    <div className={styles.blogContainer}>
      <Filter />
      <BlogWrapper />
    </div>
  );
};

export default FromFirstHandPage;
