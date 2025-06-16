import React from "react";
import image6 from "../images/image6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function AboutProduct() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-desc">
          <h2 className="name">
            about <span>our product</span>
          </h2>
          <span className="short-line"></span>
          <h3 className="title">Calacatta Gold Marble</h3>
          <p className="text">
            Calacatta Gold Marble is a luxurious natural stone, known for its
            distinctive white background and bold, elegant gold and grey
            veining. Sourced primarily from quarries in Carrara, Italy, this
            marble type brings timeless beauty and sophistication to any space.
          </p>
          <h3 className="title">Applications</h3>
          <p className="text">
            Perfect for high-end interior projects, including kitchen islands,
            bathroom vanities, statement walls, and fireplace surrounds.
            <br />
            <br />
            Why Choose Calacatta Gold? This marble combines elegance with
            uniqueness—no two slabs are the same, making your design one of a
            kind.
          </p>
          <div className="features">
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
              Rich white base with dramatic veining
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
              Subtle gold tones that add warmth
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
              Smooth, polished surface finish
            </div>
            <div className="feature">
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
              Ideal for countertops, walls, and flooring
            </div>
          </div>
        </div>
        <div className="about-img">
          <img src={image6} alt="marble image" />
        </div>
      </div>
    </section>
  );
}

export default AboutProduct;
