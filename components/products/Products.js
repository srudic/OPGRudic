import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";

import ulje from "../../public/assets/images/HomePage/maslinovo-ulje.jpg";
import bademi from "../../public/assets/images/HomePage/bademi1.jpg";

const Products = () => {
  return (
    <ArticleWrapper
      title={"Proizvodi"}
      subtitle={"Kušajte okus domaćih proizvoda"}
    >
      <ArticleItem
        title={"Jezgra badema"}
        subtitle={"OPG Rudić"}
        img
        src={bademi}
      />
      <ArticleItem
        title={"Ekstra djevičansko maslinovo ulje"}
        subtitle={"OPG Rudić"}
        img
        src={ulje}
      />
      <ArticleItem />
    </ArticleWrapper>
  );
};

export default Products;
