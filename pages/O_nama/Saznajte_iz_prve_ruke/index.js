import { useState } from "react";
import BlogWrapper from "../../../components/blog/blogWrapper";
import Filter from "../../../components/blog/filter";
import { Blog as BLOG_CONSTANS } from "../../../constants/BlogConstants";
import styles from "../../../styles/Blog/Blog.module.css";

const FromFirstHandPage = () => {
  const [blogPosts, setBlogPosts] = useState(BLOG_CONSTANS);

  const filterSelectedHandler = (filterTags) => {
    const selectedFilters = filterTags.filter((option) => option.selected);

    //Other way
    // const filteredPosts = [];

    // selectedFilters.forEach((filter) => {
    //   if (filter.selected) {
    //     BLOG_CONSTANS.forEach((post) => {
    //       if (post.tag === filter.tag) {
    //         filteredPosts.push(post);
    //       }
    //     });
    //   }
    // });

    const filteredPosts = BLOG_CONSTANS.filter((post) =>
      selectedFilters.some((filter) => {
        return filter.tag === post.tag;
      })
    );
    setBlogPosts(filteredPosts);
  };

  return (
    <div className={styles.blogContainer}>
      <Filter filterSelectedHandler={filterSelectedHandler} />
      {blogPosts.length !== 0 ? (
        <BlogWrapper blogConstants={blogPosts} />
      ) : (
        <h2>Nema prijedloga</h2>
      )}
    </div>
  );
};

export default FromFirstHandPage;
