import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";

import proizvodi from "../../public/assets/images/HomePage/maslinovo-ulje.jpg";
const PROIZVODI_ARTICLES = [
  {
    alt: "Super slika",
    paragraph:
      "Zahvaljujući iznimnom sastavu, koji svake godine analiziramo, sa sigurnošću možemo se pohvaliti kvalitetnim ekstra djevičanskim maslinovim uljem. Uz izniman sastav, pruža gorako pikantan okus kao vrhunsko ekstra djevičansko maslinovo ulje.",
  },
  {
    alt: "Super slika",
    paragraph:
      "Berba započinje iza 15. kolovoza kada plodovi budu zreli i spremni za berbu. Strojno čistimo vanjsku koru, a nakon sušenja  isto tako strojno obavljamo tučenje badema kako bi u što kraćem roku mogli isporučiti svježe bademe.",
  },
];
const OliveOilPage = () => {
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Maslinovo ulje"}
        subtitle={"Idealno u svakoj prilici!"}
      />
      {PROIZVODI_ARTICLES.map((article, i) => (
        <Article
          key={Math.random()}
          alt={article.alt}
          paragraph={article.paragraph}
          src={proizvodi}
          reverse={i % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
};

export default OliveOilPage;
