import SectionHeading
  from "../layout/SectionHeading";

const faqs = [
  {
    question:
      "How are the Zendesk apps installed?",

    answer:
      "Applications are installed directly through the Zendesk marketplace or private installation links.",
  },

  {
    question:
      "Are the applications compatible with all Zendesk plans?",

    answer:
      "Compatibility depends on the specific Zendesk features required by each application.",
  },

  {
    question:
      "Can features be requested?",

    answer:
      "Yes. Feedback, feature requests, and operational suggestions are encouraged.",
  },

  {
    question:
      "Are there known limitations?",

    answer:
      "Some applications depend on Zendesk APIs and platform limitations which may affect visibility or performance.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="faq-section"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Frequently Asked Questions"
        subtitle="Answers to common installation, compatibility, and support questions."
      />

      <div className="faq-list">

        {faqs.map((faq) => (
          <article
            key={faq.question}
            className="faq-item"
          >
            <h3>{faq.question}</h3>

            <p>{faq.answer}</p>
          </article>
        ))}

      </div>
    </section>
  );
}