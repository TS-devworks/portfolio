import TopProgressBar from "../components/layout/TopProgressBar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import { projects } from "../data/projects";
import FloatingNav from "../components/layout/FloatingNav";
import FAQSection
  from "../components/sections/FAQSection";

import Footer
  from "../components/layout/Footer";
  
export default function Home() {
  return (
    <>
      <TopProgressBar />

      <FloatingNav />

      <main className="main-content">
        <div className="ambient-glow ambient-glow-one" />
        <div className="ambient-glow ambient-glow-two" />
        <div className="ambient-glow ambient-glow-three" />
        <HeroSection />

        <AboutSection />       

        <section id="projects" className="projects-section">
          {projects.map((project, index) => (
            <ProjectSection
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </section>
        <FAQSection />

        <Footer />

      </main>
    </>
  );
}