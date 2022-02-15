import Wrapper from "../../../components/products/wrapper";
import WelcomeArticle from "../../../components/products/welcomeArticle";
import Article from "../../../components/products/article";

import { Blog as BLOG_CONSTANS } from "../../../constants/BlogConstants";

export const getStaticPaths = () => {
  const paths = BLOG_CONSTANS.map((blogArticle) => {
    return {
      params: { id: blogArticle.to.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  const id = context.params.id;
  const blogPost = BLOG_CONSTANS.filter((blogArticle) => blogArticle.to === id);

  return {
    props: { blogPosts: blogPost },
  };
};

const Details = ({ blogPosts }) => {
  // console.log(blogPost);
  const blogPost = blogPosts[0];
  return (
    <Wrapper>
      <WelcomeArticle
        title={blogPost.title}
        subtitle={blogPost.subtitle}
        // src={"/viber_image_2020-12-09_23-30-47.jpg"}
        // src={blogPost.src}
      />
      {blogPost.column.map((article, i) => {
        return (
          <Article
            key={i}
            paragraph={article.paragraph}
            title={article.title}
            // img={article.img}
            // reverse={i % 2}
          />
        );
      })}
    </Wrapper>
  );
};

export default Details;
