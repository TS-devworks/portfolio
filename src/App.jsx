import { projects } from "./data/projects";
import ProjectSection from "./components/ProjectSection";
import "./styles.css";

function App() {
  return (
    <main>
      <section className="hero">
        <h1>T. Smith</h1>
        <p>Support Ops • Zendesk • Data Tools</p>
      </section>

      {projects.map((project, index) => (
        <ProjectSection
          key={index}
          project={project}
          index={index}
        />
      ))}
    </main>
  );
}

export default App;