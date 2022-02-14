import styles from "../../styles/Blog/BlogWrapper.module.css";
import { useRouter } from "next/router";
import { Blog as BLOG_CONSTANTS } from "../../constants/BlogConstants";
import ArticleItem from "../Home/articleItem/articleItem";

const BlogItem = (props) => {
  const router = useRouter();
  return (
    <ArticleItem
      title={props.title}
      subtitle={props.subtitle}
      clicked={() => {
        router.push("/O_nama/Saznajte_iz_prve_ruke/" + props.to);
      }}
    />
  );
};

const BlogWrapper = () => {
  //   console.log(BLOG_CONSTANTS);
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
