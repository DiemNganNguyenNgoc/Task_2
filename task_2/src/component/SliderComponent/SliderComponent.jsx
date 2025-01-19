import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";

const SliderComponent = ({ arrImg }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {arrImg.map((image, index) => {
          console.log(`Index: ${index}`);
          
          return (
            <div
              key={index}
              className="slider-item"
            >
              <img
                className="slider-image"
                src={image}
                alt={`slider-${index}`}
                style={{
                  marginTop: index % 2 === 0 ? "30px" : "0", // Kiểm tra index chẵn hay lẻ
                }}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
