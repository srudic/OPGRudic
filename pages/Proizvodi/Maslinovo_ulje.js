import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";
import Button from "../../components/UI/button";
import styles from "../../styles/ProductsPage/Products.module.css";

import proizvodi from "../../public/assets/images/HomePage/maslinovo-ulje.jpg";
import slika2 from "../../public/assets/images/HomePage/traktorcic.jpg";
import slika3 from "../../public/assets/images/HomePage/nagrada.jpg";
const PROIZVODI_ARTICLES = [
  {
    alt: "Super slika",
    paragraph:
      "Zahvaljujući iznimnom sastavu, koji svake godine analiziramo, sa sigurnošću možemo se pohvaliti kvalitetnim ekstra djevičanskim maslinovim uljem. Uz izniman sastav, pruža gorako pikantan okus kao vrhunsko ekstra djevičansko maslinovo ulje.",
    src: proizvodi,
    //promijenit sliku
  },
  {
    alt: "Super slika",
    paragraph:
      "U našim poljima se nalaze različite vrste maslina: Oblica, Levantinka, Leccino, Pendolino, Frantoio, Coratina. S berbom maslina svake godine započinjemo oko 15. listopada i plodove prerađujemo u lokalnim uljarama u roku 24h, najkasnije 48h metodom hladnog prešanja.",
    src: slika2,
  },
  {
    alt: "Super slika",
    paragraph:
      "Nagrađeni smo na maslinarsko-uljarskoj manifestaciji Nočnjak sa zlatnom medaljom 2016., 2017. godine, a sa srebrnom medaljom 2018. godine.",
    src: slika3,
  },
];
const OliveOilPage = () => {
  const onClickContact = () => {
    // router.replace("/O_nama/Kontakt");
    // ne radi
  };
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Maslinovo ulje"}
        subtitle={"Idealno u svakoj prilici!"}
      />
      <div className={styles.priceContainer}>
        <h1>80kn/L</h1>
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
      <div></div>
    </Wrapper>
  );
};

export default OliveOilPage;
