import CoverPhoto from "../components/coverPhoto/coverPhoto";
import BlogTitles from "../components/blogTitles/blogTitles";
import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <CoverPhoto />
      <BlogTitles />
    </div>
  );
};

export default HomePage;
