import React from "react";
import { Link } from "react-router-dom";

import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import image3 from "../images/image3.png";
import image4 from "../images/image4.png";
import image5 from "../images/image5.png";
import image6 from "../images/image6.png";
import image7 from "../images/image7.png";
import image8 from "../images/image8.png";
import image9 from "../images/image9.jpg";
import image10 from "../images/image10.jpg";
import image11 from "../images/image11.jpg";

const categories = [
  { img: image1, name: "Category 1" },
  { img: image2, name: "Category 2" },
  { img: image3, name: "Category 3" },
  { img: image4, name: "Category 4" },
  { img: image5, name: "Category 5" },
  { img: image6, name: "Category 6" },
  { img: image7, name: "Category 7" },
  { img: image8, name: "Category 8" },
  { img: image9, name: "Category 9" },
  { img: image10, name: "Category 10" },
  { img: image11, name: "Category 11" },
];

const Category = ({ categoryRef }) => {
  return (
    <section className="category" ref={categoryRef}>
      <div className="container">
        <div className="section-heading">
          <h2>view our products</h2>
          <span></span>
        </div>
        <div className="category-items">
          {categories.map((cat, i) => (
            <div className="category-item" key={i}>
              <Link to="/details">
                <div className="pic">
                  <img src={cat.img} alt={`marble image ${i + 1}`} />
                </div>
                <div className="text">
                  <h3 className="heading">{cat.name}</h3>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
