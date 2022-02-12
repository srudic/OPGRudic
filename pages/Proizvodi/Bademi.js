import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";

import proizvodi from "../../public/assets/images/HomePage/bademi1.jpg";

const PROIZVODI_ARTICLES = [
  {
    alt: "Super slika",
    paragraph:
      "Izborom odličnih sadnica badema Ferragnes, Ferraduel i Texas, uspjeli smo obogatiti svoje obiteljsko gospodarstvo ovom zaista hranjivom namirnicom koja je jako vrijedan antioksidans te je bogata nutritivnim vrijednostima.",
  },
  {
    alt: "Super slika",
    paragraph:
      "Berba započinje iza 15. kolovoza kada plodovi budu zreli i spremni za berbu. Strojno čistimo vanjsku koru, a nakon sušenja  isto tako strojno obavljamo tučenje badema kako bi u što kraćem roku mogli isporučiti svježe bademe.",
  },
];

const AlmondsPage = () => {
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Bademi"}
        subtitle={"Vrhunska zdrava grickalica!"}
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

export default AlmondsPage;
