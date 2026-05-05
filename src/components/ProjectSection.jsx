// src/components/ProjectSection.jsx
import { useEffect, useRef, useState } from "react";

export default function ProjectSection({ project, index }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <section className="project">
      <div
        ref={ref}
        className={`project-content ${visible ? "show" : ""} ${
          index % 2 ? "reverse" : ""
        }`}
      >
        <div className="text">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>

        <div className="media">
          <video autoPlay muted loop playsInline src={project.media} />
        </div>
      </div>
    </section>
  );
}