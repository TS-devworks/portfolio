import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#hero", id: "hero" },
  { label: "About", href: "#about", id: "about" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveSection(visible.target.id);
        }
      },
      {
        threshold: 0.35,
      }
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="floating-nav">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className={activeSection === item.id ? "active" : ""}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}