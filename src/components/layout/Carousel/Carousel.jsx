import { useState } from "react";
import "./carousel.css";

import {
  beautyBanner_1,
  beautyBanner_2,
  furnitureBanner_1,
  furnitureBanner_2,
  perfumeBanner_2,
  vegiesBanner_1,
  vegiesBanner_2,
} from "../../../assets/images";

const Carousel = () => {
  const images = [
    beautyBanner_1,
    furnitureBanner_1,
    vegiesBanner_1,
    beautyBanner_2,
    furnitureBanner_2,
    perfumeBanner_2,
    vegiesBanner_2,
  ];

  const [current, setCurrent] = useState(0);

  // PREVIOUS
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="carousel">
      <img
        src={images[current]}
        alt="banner"
        className="carousel-image"
      />

      <div className="carousel-overlay"></div>

      <div className="carousel-content">
        <span className="carousel-badge">
          Premium Collection
        </span>

        <h1 className="carousel-title">
          Discover Luxury Designed For Modern Living
        </h1>

        <p className="carousel-description">
          Explore curated fashion, beauty, furniture, and lifestyle essentials.
        </p>

        <button className="carousel-btn">
          Shop Now
        </button>
      </div>

      <button
        onClick={prevSlide}
        className="carousel-arrow carousel-arrow-left"
      >
        ←
      </button>

      <button
        onClick={nextSlide}
        className="carousel-arrow carousel-arrow-right"
      >
        →
      </button>

      {/* DOTS */}
      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`carousel-dot ${
              current === index ? "active-dot" : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;