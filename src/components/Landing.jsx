import { useState, useEffect } from "react";
import "../css/style.css";
import home1 from "../images/Home/1.png";
import home2 from "../images/Home/2.png";
import home3 from "../images/Home/3.png";
import home4 from "../images/Home/4.png";
import home5 from "../images/Home/5.png";
import home6 from "../images/Home/6.png";
import home7 from "../images/Home/7.png";
import home8 from "../images/Home/8.png";

const images = [home1, home2, home3 , home4 ,home5 , home6,home7, home8];

const Landing = ({scrollToCategory}) => {
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
          discover the beauty of <span>marble</span>
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
