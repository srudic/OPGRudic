import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";
import styles from "../../styles/BlogTitles.module.css";

const BlogTitles = () => {
  return (
    <ArticleWrapper>
      <ArticleItem
        year={"2021."}
        title={"Proglašenje najboljeg ulja u sedam Kaštela"}
      />
      <ArticleItem
        year={"2021."}
        title={
          " Urod ipak nije propao - “Bit će dovoljno za cijelu obitelj, ostat će i za..."
        }
      />
    </ArticleWrapper>
  );
};

export default BlogTitles;
