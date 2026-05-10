import Sidebar from "../components/layout/Sidebar";
import TopProgressBar from "../components/layout/TopProgressBar";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";

export default function Home() {
  return (
    <>
      <TopProgressBar />

      <Sidebar />

      <main className="main-content">

        <HeroSection />

        <AboutSection />        

      </main>
    </>
  );
}