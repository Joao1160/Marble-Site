import { useState, useEffect } from "react";
import "../css/style.css";
import home1 from "../images/Home/1.webp";
import home2 from "../images/Home/2.webp";
import home3 from "../images/Home/3.webp";
import home4 from "../images/Home/4.webp";
import home5 from "../images/Home/5.webp";
import home6 from "../images/Home/6.webp";
import home7 from "../images/Home/7.webp";
import home8 from "../images/Home/8.webp";

const images = [home1, home2, home3, home4, home5, home6, home7, home8];

const Landing = ({ scrollToCategory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slider fade-slider">
      <div className="landing">
        <h1 className="landing-title">
          Discover the Beauty of <span>Marble</span> | Regalith Marble
        </h1>

        <button onClick={scrollToCategory} className="explore-btn">
          Explore Marble Types
        </button>
      </div>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`slider-image ${index === currentIndex ? "active" : ""}`}
        />
      ))}

      <button className="arrow left-arrow" onClick={goToPrev}>
        ❮
      </button>
      <button className="arrow right-arrow" onClick={goToNext}>
        ❯
      </button>
    </div>
  );
};

export default Landing;
