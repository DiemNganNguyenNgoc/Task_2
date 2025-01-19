import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";

const SliderComponent = ({ arrImg }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arrImg.map((image, index) => (
          <div
            key={index}
            className="slider-item"
            style={{
              marginTop: index % 2 === 0 ? "50px" : "0", // Kiểm tra index chẵn hay lẻ
            }}
          >
            <img
              className="slider-image"
              src={image}
              alt={`slider-${index}`}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
