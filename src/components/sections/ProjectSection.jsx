import { useEffect, useRef, useState } from "react";
import { projects } from "../../data/projects";
import SectionHeading from "../layout/SectionHeading";

export default function ProjectSection() {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.current.indexOf(entry.target);
          if (entry.isIntersecting && index !== -1) {
            setVisible((current) => {
              const next = [...current];
              next[index] = true;
              return next;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    refs.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <SectionHeading
        title="Featured projects"
        subtitle="Selected work across Zendesk tooling and analytics experiences."
      />

      {projects.map((project, index) => (
        <div
          key={project.title}
          ref={(el) => (refs.current[index] = el)}
          className={`project-card ${visible[index] ? "show" : ""} ${
            index % 2 ? "reverse" : ""
          }`}
        >
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>

          <div className="project-media">
            <video autoPlay muted loop playsInline src={project.media} />
          </div>
        </div>
      ))}
    </section>
  );
}
