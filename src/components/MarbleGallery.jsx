import React from "react";

const images = [
  "image1.png",
  "image2.png",
  "image3.png",
  "image4.png",
  "image5.png",
  "image6.png",
  "image7.png",
  "image8.png",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
];

function MarbleGallery() {
  return (
    <div className="marbles" id="marbles">
      <div className="section-heading">
        <h2 className="heading">More</h2>
        <p className="title">images</p>
      </div>
      <div className="marbles-images" id="marble-images">
        {images.map((img, index) => (
          <div className="marble" key={index}>
            <img src={require(`../images/${img}`)} alt="marble-image" />
            <div className="text">
              <h3 className="name">title</h3>
              <p className="title">marble</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarbleGallery;
