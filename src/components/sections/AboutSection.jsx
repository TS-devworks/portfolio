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
            Focused on creating practical solutions with a strong emphasis on long-term usability, operational insight, 
            and automation, helping teams work more efficiently without overcomplicating their workflows. 
            Every solution is designed with scalability, maintainability, and real-world business needs in mind. 
            The focus is not just on building functional software, but on creating tools that provide lasting value, improve visibility, and simplify day-to-day operations.

          </p>
        </div>

        <div className="about-card">
          <h3>About Me</h3>

          <p>
            I’m passionate about technology, problem-solving, and building tools that create meaningful real-world impact. 
            My work combines technical development, system design, and operational thinking to create software that is both practical and scalable. 
            I enjoy exploring new technologies, improving complex workflows, and turning ideas into polished solutions through thoughtful design, automation, and continuous learning.

          </p>
        </div>

      </div>
    </section>
  );
}