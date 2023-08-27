import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/hero-img.png";
import Img2 from "../assets/hero-img2.jpeg";
import Img3 from "../assets/hero-img3.jpeg";

const initialImages = [Img1, Img2, Img3];

function ImageSlider() {
  const [images, setImages] = useState(initialImages);

  return (
    <div className="z-[0]">
      <Carousel autoPlay interval={3000} infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
