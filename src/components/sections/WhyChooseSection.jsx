import SectionHeading from "../layout/SectionHeading";

function WhyChooseSection() {
  return (
    <section className="why-choose-section">
      <SectionHeading
        title="Why choose this work"
        subtitle="Thoughtful design combined with high-impact tooling."
      />
      <div className="feature-grid">
        <article>
          <h3>Clarity</h3>
          <p>Interfaces that keep complex workflows clean and easy to follow.</p>
        </article>
        <article>
          <h3>Performance</h3>
          <p>Fast-loading pages and media-rich interaction patterns that feel premium.</p>
        </article>
        <article>
          <h3>Insight</h3>
          <p>Data-driven decisions built into every display and dashboard.</p>
        </article>
      </div>
    </section>
  );
}

export default WhyChooseSection;
