import Wrapper from "../../../components/products/wrapper";
import WelcomeArticle from "../../../components/products/welcomeArticle";
import Article from "../../../components/products/article";
import Head from "next/head";
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
  const blogPost = blogPosts[0];
  return (
    <Wrapper>
      <Head>
        <title>OPG Rudić - O nama - Saznajte iz prve ruke</title>
        <meta
          name="description"
          content="Meta description for the Almonds page"
        />
      </Head>
      <WelcomeArticle title={blogPost.title} subtitle={blogPost.subtitle} />
      {blogPost.column.map((article, i) => {
        return (
          <Article
            key={i}
            paragraph={article.paragraph}
            title={article.title}
          />
        );
      })}
    </Wrapper>
  );
};

export default Details;
