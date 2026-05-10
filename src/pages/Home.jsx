import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import HeroSection from "../components/sections/HeroSection";
import WhyChooseSection from "../components/sections/WhyChooseSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectSection from "../components/sections/ProjectSection";
import FAQSection from "../components/sections/FAQSection";
import PricingSection from "../components/sections/PricingSection";

function Home() {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="page-content">
        <HeroSection />
        <WhyChooseSection />
        <AboutSection />
        <ProjectSection />
        <FAQSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
