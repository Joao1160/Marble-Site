import React from "react";
import marble1 from "../images/marble1.jpg";
import marble2 from "../images/marble2.jpg";
import marble3 from "../images/marble3.jpg";
import marble4 from "../images/marble4.png";
import marble5 from "../images/marble5.png";

const Landing = ({ scrollToCategory }) => {
  const images = [marble1, marble2, marble3, marble4, marble5];

  return (
    <div className="home-landing" id="home">
      <div className="container">
        <h1 className="landing-title">
          discover the beauty of <span>marble</span>
        </h1>
        
        <button onClick={scrollToCategory} className="explore-btn">
          Explore Marble Types
        </button>

        <div className="seamless-slider">
          <div className="slider-track">
            {[...images, ...images, ...images].map((img, i) => (
              <div className="slider-img" key={i}>
                <img src={img} alt={`marble-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
