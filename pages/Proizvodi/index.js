import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";
import Head from "next/head";
import proizvodi from "../../public/assets/images/HomePage/bademi1.jpg";

import { useRouter } from "next/router";

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
  const router = useRouter();
  const onClickOpenAlmondsPage = () => {
    router.replace("/Proizvodi/Bademi");
  };
  const onClickOpenOilPage = () => {
    router.replace("/Proizvodi/Maslinovo_ulje");
  };
  return (
    <Wrapper>
      <Head>
        <title>OPG Rudić - Proizvodi</title>
        <meta
          name="description"
          content="Meta description for the Products page"
        />
      </Head>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Proizvodi"}
        subtitle={"Kušajte okus domaćih proizvoda!"}
      />
      {PROIZVODI_ARTICLES.map((article, i) => (
        <Article
          key={Math.random()}
          title={article.title}
          subtitle={article.subtitle}
          alt={article.alt}
          paragraph={article.paragraph}
          buttonTitle={article.buttonTitle}
          src={proizvodi}
          button
          reverse={i % 2 !== 0}
          clicked={
            article.subtitle === "Jezgra badema"
              ? onClickOpenAlmondsPage
              : onClickOpenOilPage
          }
        />
      ))}
    </Wrapper>
  );
};

export default ProductsPage;
