import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";
import styles from "../../styles/Products.module.css";

const Products = () => {
  return (
    <ArticleWrapper
      title={"Proizvodi"}
      subtitle={"Kušajte okus domaćih proizvoda"}
    >
      <ArticleItem title={"Jezgra badema"} subtitle={"OPG Rudić"} img />
      <ArticleItem
        title={"Ekstra djevičansko maslinovo ulje"}
        subtitle={"OPG Rudić"}
        img
      />
      <ArticleItem />
    </ArticleWrapper>
  );
};

export default Products;
