import TopProgressBar from "../components/layout/TopProgressBar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import { projects } from "../data/projects";
import FloatingNav from "../components/layout/FloatingNav";

export default function Home() {
  return (
    <>
      <TopProgressBar />

      <FloatingNav />

      <main className="main-content">

        <HeroSection />

        <AboutSection />       

        {projects.map((project, index) => (
          <ProjectSection
            key={project.id}
            project={project}
            reverse={index % 2 !== 0}
          />
        ))} 

      </main>
    </>
  );
}