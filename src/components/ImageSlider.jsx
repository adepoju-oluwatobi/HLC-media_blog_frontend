import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import { Carousel } from "react-responsive-carousel";
import Img1 from "../assets/6-img.jpg";
import Img2 from "../assets/5-img.jpg";
import Img3 from "../assets/4-img.jpg";
import Img4 from "../assets/3-img.jpg";
import Img5 from "../assets/2-img.jpg";
import Img6 from "../assets/1-img.jpg";
import Img7 from "../assets/7-img.jpg";
import Img8 from "../assets/8-img.jpg";
import Img9 from "../assets/9-img.jpg";
import Img10 from "../assets/10-img.jpg";

const initialImages = [Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8, Img9, Img10];

function ImageSlider() {
  const [images, setImages] = useState(initialImages);

  return (
    <div className="z-[0]">
      <Carousel autoPlay interval={5000} infiniteLoop showThumbs={false}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="w-[100%] h-[45vh]" src={image} alt="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ImageSlider;
