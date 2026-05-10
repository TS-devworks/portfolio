import SectionHeading from "../layout/SectionHeading";
import { pricing } from "../../data/pricing";

function PricingSection() {
  return (
    <section className="pricing-section">
      <SectionHeading
        title="Pricing"
        subtitle="Simple packages for product exploration and focused delivery."
      />
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <div key={plan.name} className="pricing-card">
            <h3>{plan.name}</h3>
            <p>{plan.description}</p>
            <strong>{plan.price}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;
