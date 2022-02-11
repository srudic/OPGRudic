import styles from "../../styles/Products.module.css";

const Products = () => {
  return (
    <div className={styles.ProductsWrapper}>
      <h2>Proizvodi</h2>
      <h3>Kušajte okus domaćih proizvoda</h3>
      <div className={styles.ProductsContainer}>
        <div>Bademi</div>
        <div>Ulje</div>
      </div>
    </div>
  );
};

export default Products;
