import React from "react";
import Slider from "react-slick";
import "./SliderComponent.css";

// CustomPrevArrow Component
const CustomPrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-prev" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21">
      <path d="m12.718 4.707-1.413-1.415L2.585 12l8.72 8.707 1.413-1.415L6.417 13H20v-2H6.416l6.302-6.293z" />
    </svg>
  </div>
);

// CustomNextArrow Component
const CustomNextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-next" onClick={onClick}>
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21"><path d="M11.293 4.707 17.586 11H4v2h13.586l-6.293 6.293 1.414 1.414L21.414 12l-8.707-8.707-1.414 1.414z"/></svg>
  </div>
);

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
