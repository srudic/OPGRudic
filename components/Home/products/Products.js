import ArticleWrapper from "../articleWrapper/articleWrapper";
import ArticleItem from "../articleItem/articleItem";
import { useRouter } from "next/router";

import ulje from "../../../public/assets/images/HomePage/maslinovo-ulje.jpg";
import bademi from "../../../public/assets/images/HomePage/bademi1.jpg";

const Products = () => {
  const router = useRouter();
  const onClickLinkToOilPage = () => {
    router.replace("/Proizvodi/Maslinovo_ulje");
  };
  const onClickLinkToAlmondsPage = () => {
    router.replace("/Proizvodi/Bademi");
  };
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
        clicked={onClickLinkToAlmondsPage}
      />
      <ArticleItem
        title={"Ekstra djevičansko maslinovo ulje"}
        subtitle={"OPG Rudić"}
        img
        src={ulje}
        clicked={onClickLinkToOilPage}
      />
      <ArticleItem />
    </ArticleWrapper>
  );
};

export default Products;
