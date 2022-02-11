import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";

const BlogTitles = () => {
  return (
    <ArticleWrapper>
      <ArticleItem
        subtitle={"2021."}
        title={"Proglašenje najboljeg ulja u sedam Kaštela"}
      />
      <ArticleItem
        subtitle={"2021."}
        title={
          " Urod ipak nije propao - “Bit će dovoljno za cijelu obitelj, ostat će i za..."
        }
      />
    </ArticleWrapper>
  );
};

export default BlogTitles;
