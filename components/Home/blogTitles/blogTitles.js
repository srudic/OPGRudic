import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";
import { Blog as BLOG_CONSTANTS } from "../../../constants/BlogConstants";

const BlogTitles = () => {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const rand1 = Math.floor(Math.random() * BLOG_CONSTANTS.length);
    const rand2 = Math.floor(Math.random() * BLOG_CONSTANTS.length);

    setPosts([BLOG_CONSTANTS[rand1], BLOG_CONSTANTS[rand2]]);
    // console.log(rand1, rand2);
  }, []);

  const clickHandler = () => {};

  return (
    <ArticleWrapper>
      {posts.map((post, i) => (
        <ArticleItem
          key={post.to + i}
          subtitle={post.year}
          title={post.title}
          clicked={() =>
            router.push("/O_nama/Saznajte_iz_prve_ruke/" + post.to)
          }
        />
      ))}

      {/* <ArticleItem
        subtitle={"2021."}
        title={
          " Urod ipak nije propao - “Bit će dovoljno za cijelu obitelj, ostat će i za..."
        }
      /> */}
    </ArticleWrapper>
  );
};

export default BlogTitles;
