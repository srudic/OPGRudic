import Wrapper from "../../components/contact/wrapper";
import ContactInfo from "../../components/contact/contactInfo";
import styles from "../../styles/ContactPage/Contact.module.css";
const ContactPage = () => {
  return (
    <Wrapper>
      <div className={styles.contactContainer}>
        <ContactInfo />
        <div className={styles.contactForm}> Form</div>
      </div>
    </Wrapper>
  );
};

export default ContactPage;
