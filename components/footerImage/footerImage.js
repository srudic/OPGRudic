import Image from "next/image";
import img1 from "../../public/assets/images/masline1.png";

import Button from "../UI/button";

import styles from "../../styles/FooterImage.module.css";

const FooterImage = () => {
  //Checkout on what site you are
  //Decide what image you will display
  const image = img1;
  const headline1 = "Obiteljsko poljoprivredno";
  const headline2 = "gospodarstvo obitelji Rudić";

  return (
    <div className={styles.imageContainer}>
      <Image src={image} />
      <div className={styles.headLineContainer}>
        <h2>{headline1}</h2>
        <h2>{headline2}</h2>
      </div>
      <div className={styles.buttonContainer}>
        <Button title={"Kontaktirajte nas"} />
      </div>
    </div>
  );
};

export default FooterImage;
