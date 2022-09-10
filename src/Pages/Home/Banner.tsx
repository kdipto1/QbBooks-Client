import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../Images/Banner/banner.jpg";
import banner1 from "../../Images/Banner/banner1.jpg";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Slider {...settings}>
        <div>
          <img
            className="w-full"
            style={{ height: "85vh" }}
            src={banner}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-full"
            style={{ height: "85vh" }}
            src={banner1}
            alt=""
          />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
