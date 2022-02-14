import styles from "../../styles/ContactPage/Contact.module.css";

import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Kontakt informacije</h2>
      <p>
        Popunite kontakt formu i naš tim će vam odgovoriti u što kraćem roku!
      </p>
      <div className={styles.info}>
        <FaPhoneAlt color="#e2b04f" />
        <h3>+385912222222</h3>
      </div>
      <div className={styles.info}>
        <FaEnvelope color="#e2b04f" />
        <h3>opg.rudic@gmail.com</h3>
      </div>
      <div className={styles.info}>
        <FaMapMarkerAlt color="#e2b04f" />
        <h3>Uz vrtle 34,21217 Kaštel Novi</h3>
      </div>
    </div>
  );
};

export default ContactInfo;
