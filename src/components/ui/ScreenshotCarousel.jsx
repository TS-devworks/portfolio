import { useState } from "react";

export default function ScreenshotCarousel({
  screenshots,
}) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  return (
    <div className="carousel">

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