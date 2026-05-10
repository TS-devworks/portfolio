import { useEffect, useState } from "react";

export default function TopProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="progress-container">
      <div
        className="progress-bar"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}