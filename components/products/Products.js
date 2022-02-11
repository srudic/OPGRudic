import ArticleWrapper from "../articleWrapper/articleWrapper";
import styles from "../../styles/Products.module.css";

const Products = () => {
  return (
    <ArticleWrapper
      title={"Proizvodi"}
      subtitle={"Kušajte okus domaćih proizvoda"}
    >
      <div>Bademi</div>
      <div>Ulje</div>
    </ArticleWrapper>
  );
};

export default Products;
