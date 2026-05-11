import { useEffect, useState } from "react";

export default function ScreenshotCarousel({
  screenshots,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const [paused, setPaused] =
    useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === screenshots.length - 1
          ? 0
          : prev + 1
      );
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, screenshots.length]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >

      <img
        src={screenshots[activeIndex]}
        alt=""
        className="carousel-image"
      />

      <div className="carousel-thumbnails">

        {screenshots.map((shot, index) => (
          <button
            key={shot}
            className={`carousel-thumb ${
              activeIndex === index
                ? "active"
                : ""
            }`}
            onClick={() =>
              setActiveIndex(index)
            }
          >
            <img src={shot} alt="" />
          </button>
        ))}

      </div>

    </div>
  );
}