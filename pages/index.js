import CoverPhoto from "../components/coverPhoto/coverPhoto";
import BlogTitles from "../components/blogTitles/blogTitles";
import Products from "../components/products/Products";
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
