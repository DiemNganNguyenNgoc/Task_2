import React from "react";
import "./Task2.css";
import SliderComponent from "./component/SliderComponent/SliderComponent";
import image1 from "./image/carousel1.png";
import image2 from "./image/carousel2.png";
import image3 from "./image/carousel3.png";
import image4 from "./image/carousel4.png";
import image5 from "./image/carousel5.png";
import image6 from "./image/carousel6.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Task2 = () => {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="format container">
      <div className="format section-holder">
        <div className="format top-holder">
          <img
            className="icon"
            src="https://shub.edu.vn/_next/image?url=%2Fimages%2Flanding%2Fver3%2Fimage-section%2Fnetworking.gif&w=64&q=75"
            alt="Networking"
          />
          <p className="format title">Hoạt động tiêu biểu từ cộng đồng giáo dục</p>
          <p className="format sub-title">
            Hình ảnh được chính những giáo viên từ khắp 3 miền ghi lại trong quá
            trình giảng dạy, dạy học ứng dụng công nghệ SHub Classroom.
          </p>
        </div>
        <SliderComponent arrImg={images} />
      </div>
    </div>
  );
};

export default Task2;
