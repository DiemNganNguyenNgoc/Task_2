import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";
import CustomNextArrow from "../CustomNextArrow/CustomNextArrow.js";
import CustomPrevArrow from "../CustomPrevArrow/CustomPrevArrow.js";

// SliderComponent
const SliderComponent = ({ arrImg }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arrImg.map((image, index) => (
          <div key={index} className="slider-item">
            <img className="slider-image" src={image} alt={`slider-${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
