import CoverPhoto from "../components/coverPhoto/coverPhoto";
import BlogTitles from "../components/Home/blogTitles/blogTitles";
import Products from "../components/Home/products/Products";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CoverPhoto />
      <BlogTitles />
      <Products />
    </div>
  );
};

export default HomePage;
