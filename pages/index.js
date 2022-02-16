import CoverPhoto from "../components/coverPhoto/coverPhoto";
import BlogTitles from "../components/Home/blogTitles/blogTitles";
import Products from "../components/Home/products/Products";
import styles from "../styles/HomePage.module.css";
import Head from "next/head";

const HomePage = () => {
  return (
    <>
      <Head>
        <title>OPG Rudić - Naslovnica</title>
        <meta name="description" content="Meta description for the Home page" />
      </Head>
      <div className={styles.container}>
        <CoverPhoto />
        <BlogTitles />
        <Products />
      </div>
    </>
  );
};

export default HomePage;
