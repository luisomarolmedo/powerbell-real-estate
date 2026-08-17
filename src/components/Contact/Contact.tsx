import Container from "../shared/Container";
import SectionTitle from "../shared/SectionTitle";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function Contact() {
  return (
    <section id="contacto" className="bg-stone-50 py-24">
      <Container>
        <SectionTitle
          title="Conoce Altavia en persona"
          subtitle="Agenda una visita y descubre un espacio diseñado para tu estilo de vida."
        />

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <ContactInfo />

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
