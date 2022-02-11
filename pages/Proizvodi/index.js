import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";

import proizvodi from "../../public/assets/images/HomePage/bademi1.jpg";

const PROIZVODI_ARTICLES = [
  {
    title: "Idealno u svakoj prilici",
    subtitle: "Ekstra djevičansko maslinovo ulje",
    buttonTitle: "Saznajte više",
    alt: "Super slika",
    paragraph:
      "Zahvaljujući iznimnom sastavu, koji svake godine analiziramo, sa sigurnošću možemo se pohvaliti kvalitetnim ekstra djevičanskim maslinovim uljem. Uz izniman sastav, pruža gorako pikantan okus kao vrhunsko ekstra djevičansko maslinovo ulje.",
  },
  {
    title: "Vrhunska zdrava grickalica",
    subtitle: "Jezgra badema",
    buttonTitle: "Saznajte više",
    alt: "Super slika",
    paragraph:
      "Izborom odličnih sadnica badema uspjeli smo obogatiti svoje obiteljsko gospodarstvo ovom zaista hranjivom namirnicom koja je jako vrijedan antioksidans te je bogata nutritivnim vrijednostima.",
  },
];

const ProductsPage = () => {
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Proizvodi"}
        subtitle={"Kušajte okus domaćih proizvoda!"}
      />
      {PROIZVODI_ARTICLES.map((article, i) => (
        <Article
          title={article.title}
          subtitle={article.subtitle}
          alt={article.alt}
          paragraph={article.paragraph}
          buttonTitle={article.buttonTitle}
          src={proizvodi}
          button
          reverse={i % 2 !== 0}
        />
      ))}
    </Wrapper>
  );
};

export default ProductsPage;
