import SectionHeading from "../layout/SectionHeading";

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <SectionHeading
        title="About me"
        subtitle="A blend of product thinking, developer experience, and customer empathy."
      />
      <p>
        With experience across support operations and Zendesk app development,
        I help teams turn workflow complexity into polished, productive
        interfaces.
      </p>
    </section>
  );
}

export default AboutSection;
