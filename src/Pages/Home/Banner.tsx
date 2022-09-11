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
  const bannerStyles = {
    height: "75vh",
  };
  return (
    <section>
      <Slider {...settings}>
        <div>
          <img className="w-full" style={bannerStyles} src={banner1} alt="" />
        </div>
        <div>
          <img className="w-full" style={bannerStyles} src={banner} alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
