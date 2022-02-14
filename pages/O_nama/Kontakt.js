import Wrapper from "../../components/contact/wrapper";
import ContactInfo from "../../components/contact/contactInfo";
import ContactForm from "../../components/contact/contactForm";
import styles from "../../styles/ContactPage/Contact.module.css";
const ContactPage = () => {
  return (
    <Wrapper>
      <div className={styles.contactContainer}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default ContactPage;
