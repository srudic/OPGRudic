import Wrapper from "../../components/contact/wrapper";
import ContactInfo from "../../components/contact/contactInfo";
import ContactForm from "../../components/contact/contactForm";
import styles from "../../styles/ContactPage/Contact.module.css";
import Head from "next/head";
const ContactPage = () => {
  return (
    <Wrapper>
      <Head>
        <title>OPG Rudić - O nama - Kontakt</title>
        <meta
          name="description"
          content="Meta description for the Contact page"
        />
      </Head>
      <div className={styles.contactContainer}>
        <ContactInfo />
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default ContactPage;
