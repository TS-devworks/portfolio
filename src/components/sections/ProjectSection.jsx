import { useEffect, useRef, useState } from "react";

import ScreenshotCarousel
  from "../ui/ScreenshotCarousel";

export default function ProjectSection({
  project,
  reverse,
}) {
  const ref = useRef();

  const [visible, setVisible] =
    useState(false);

  useEffect(() => {
    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setVisible(entry.isIntersecting);
        },
        {
          threshold: 0.3,
          rootMargin: "0px 0px -5% 0px",
        }
      );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`
        project-card
        ${visible ? "show" : ""}
        ${reverse ? "reverse" : ""}
      `}
    >

      <div className="project-details">

        <p className="project-tag">
          Featured Project
        </p>

        <h2>{project.title}</h2>

        <p className="project-subtitle">
          {project.subtitle}
        </p>

        <p className="project-description">
          {project.description}
        </p>

        <div className="feature-pills">

          {project.features.map((feature) => (
            <span
              key={feature}
              className="feature-pill"
            >
              {feature}
            </span>
          ))}

        </div>

        <div className="pricing-box">

          <h3>
            {project.pricing.current}
          </h3>

          <p>
            {project.pricing.future}
          </p>

        </div>

      </div>

      <div className="project-media">

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          src={project.video}
        />

        <ScreenshotCarousel
          screenshots={project.screenshots}
        />

      </div>

    </section>
  );
}