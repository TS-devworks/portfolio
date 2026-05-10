import Sidebar from "../components/layout/Sidebar";
import TopProgressBar from "../components/layout/TopProgressBar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <TopProgressBar />

      <Sidebar />

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