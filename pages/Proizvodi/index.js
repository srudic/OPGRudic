import Wrapper from "../../components/products/wrapper";
import WelcomeArticle from "../../components/products/welcomeArticle";

import proizvodi from "../../public/assets/images/HomePage/bademi1.jpg";

const ProductsPage = () => {
  return (
    <Wrapper>
      <WelcomeArticle
        src={proizvodi}
        alt={"Proizvodi Rudić OPG"}
        title={"Proizvodi"}
        subtitle={"Kušajte okus domaćih proizvoda!"}
      />
      <div>The products page</div>
    </Wrapper>
  );
};

export default ProductsPage;
