import SectionHeading from "../layout/SectionHeading";
import { faq } from "../../data/faq";

function FAQSection() {
  return (
    <section id="faq" className="faq-section">
      <SectionHeading
        title="Frequently asked questions"
        subtitle="Answers to the most common project and collaboration questions."
      />
      <div className="faq-list">
        {faq.map((item, index) => (
          <div key={index} className="faq-item">
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection;
