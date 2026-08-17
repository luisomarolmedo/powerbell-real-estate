import Container from "../shared/Container";
import SectionLabel from "../shared/SectionLabel";
import SectionTitle from "../shared/SectionTitle";

import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function Contact() {
  return (
    <section id="contacto" className="py-24" style={{ backgroundColor: "#F3F1EC" }}>
      <Container>
        <SectionLabel number="04" label="CONTACTO" />
        <SectionTitle
          title="Conoce Altavia en persona"
          subtitle="Agenda una visita y descubre un espacio diseñado para tu estilo de vida."
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1fr_auto_1fr] lg:gap-0">
          <ContactInfo />
          <div className="hidden lg:mx-12 lg:block lg:h-full lg:w-px lg:bg-stone-300" />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}

export default Contact;
