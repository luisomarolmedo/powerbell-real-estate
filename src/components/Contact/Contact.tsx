import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function Contact() {
  return (
    <section id="contacto" className="bg-stone-50 py-20">
      <Container>
        <SectionTitle
          title="Contáctanos"
          subtitle="Agenda una visita y conoce Terranova."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
