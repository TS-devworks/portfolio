import Sidebar from "../components/layout/Sidebar";
import TopProgressBar from "../components/layout/TopProgressBar";
import HeroSection from "../components/sections/HeroSection";

export default function Home() {
  return (
    <>
      <TopProgressBar />

      <Sidebar />

      <main className="main-content">

        <HeroSection />
        <section id="about">
          <h2>About</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="faq">
          <h2>FAQ</h2>
        </section>

      </main>
    </>
  );
}