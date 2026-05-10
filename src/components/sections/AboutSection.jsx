import SectionHeading from "../layout/SectionHeading";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="about-section"
    >
      <SectionHeading
        eyebrow="About"
        title="Building tools that simplify Zendesk administration"
        subtitle="Focused on visibility, operational efficiency, and scalable workflows."
      />

      <div className="about-grid">

        <div className="about-card">
          <h3>Why Choose JDevSolutions</h3>

          <p>
            Purpose-built Zendesk applications designed
            to improve visibility, reduce manual effort,
            and simplify administration workflows.
          </p>
        </div>

        <div className="about-card">
          <h3>About Me</h3>

          <p>
            I build modern operational tools focused on
            automation, auditing, and workflow
            optimization for support environments.
          </p>
        </div>

      </div>
    </section>
  );
}