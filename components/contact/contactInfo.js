import styles from "../../styles/ContactPage/Contact.module.css";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h2>Kontakt informacije</h2>
      <p>
        Popunite kontakt formu i naš tim će vam odgovoriti u što kraćem roku!
      </p>
      <h3>Telefon</h3>
      <h3>E-mail</h3>
      <h3>Adresa</h3>
    </div>
  );
};

export default ContactInfo;
