import Link from "next/link";
import styles from "../../styles/Blog/BlogWrapper.module.css";
import { Blog as BLOG_CONSTANTS } from "../../constants/BlogConstants";

const BlogItem = (props) => {
  return (
    <Link href={"/Saznajte_iz_prve_ruke/" + props.to}>
      <div className={styles.ItemContainer}>
        <h3>{props.subtitle}</h3>
        <h2>{props.title}</h2>
      </div>
    </Link>
  );
};

const BlogWrapper = () => {
  console.log(BLOG_CONSTANTS);
  return (
    <div className={styles.wrapperContainer}>
      {BLOG_CONSTANTS.map((blogItem) => (
        <BlogItem
          key={blogItem.to}
          to={blogItem.to}
          title={blogItem.title}
          subtitle={blogItem.subtitle}
        />
      ))}
    </div>
  );
};

export default BlogWrapper;
