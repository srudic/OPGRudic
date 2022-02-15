import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";
import Article from "../../components/products/article";

const INFO = {
  title: "O nama",
  column: [
    {
      paragraph:
        "Mi smo obiteljsko poljoprivredno gospodarstvo obitelji Rudić. Naša poljoprivredna zemljišta se nalaze u plodnom Kaštelanskom polju. Obuhvaćaju 1,5ha na području Kaštel Štafilića, Kaštel Novog i Kaštel Starog s 300 stabala maslina i 200 stabala badema. U našim poljima se nalaze različite vrste maslina: Oblica, Levantinka, Leccino, Pendolino, Frantoio, Coratina. Dok od badema imamo tri vrste: Ferragnes, Ferraduel i Texas. O našim biljkama se brinemo prema uputama Hrvatske poljoprivredno-šumarske savjetodavne službe.",
    },
  ],
};
const AboutUsPage = () => {
  return (
    <Wrapper>
      <WelcomeArticle subtitle={INFO.title} info />
      {INFO.column.map((article, i) => {
        return <Article key={i} paragraph={article.paragraph} />;
      })}
    </Wrapper>
  );
};

export default AboutUsPage;
