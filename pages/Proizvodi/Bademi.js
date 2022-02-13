import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";
import Button from "../../components/UI/button";

import proizvodi from "../../public/assets/images/HomePage/bademi1.jpg";
import slika1 from "../../public/assets/images/HomePage/bajamici.jpg";
import slika2 from "../../public/assets/images/HomePage/frezanje.jpg";

import styles from "../../styles/ProductsPage/Products.module.css";

import { useRouter } from "next/router";

const PROIZVODI_ARTICLES = [
  {
    alt: "Super slika",
    paragraph:
      "Izborom odličnih sadnica badema Ferragnes, Ferraduel i Texas, uspjeli smo obogatiti svoje obiteljsko gospodarstvo ovom zaista hranjivom namirnicom koja je jako vrijedan antioksidans te je bogata nutritivnim vrijednostima.",
    src: slika1,
  },
  {
    alt: "Super slika",
    paragraph:
      "Berba započinje iza 15. kolovoza kada plodovi budu zreli i spremni za berbu. Strojno čistimo vanjsku koru, a nakon sušenja  isto tako strojno obavljamo tučenje badema kako bi u što kraćem roku mogli isporučiti svježe bademe.",
    src: slika2,
  },
];

const AlmondsPage = () => {
  const router = useRouter();
  const onClickContact = () => {
    // router.replace("/O_nama/Kontakt");
    // ne radi
  };
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Bademi"}
        subtitle={"Vrhunska zdrava grickalica!"}
      />
      <div className={styles.priceContainer}>
        <h1>80kn/kg</h1>
        <Button title={"Kontaktirajte nas"} clicked={onClickContact} />
      </div>
      {PROIZVODI_ARTICLES.map((article, i) => (
        <Article
          key={Math.random()}
          alt={article.alt}
          paragraph={article.paragraph}
          src={article.src}
          reverse={i % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
};

export default AlmondsPage;
