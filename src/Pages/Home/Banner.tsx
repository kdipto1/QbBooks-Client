import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../Images/Banner/banner.jpg";
import banner1 from "../../Images/Banner/banner1.jpg";
import b from "../../Images/Banner/b.jpg";
const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    fade: true,
  };
  const bannerStyles = {
    height: "75vh",
  };
  return (
    <section>
      <Slider {...settings}>
        <div>
          <img className="w-full" style={bannerStyles} src={b} alt="" />
        </div>
        <div>
          <img className="w-full " style={bannerStyles} src={banner1} alt="" />
        </div>
        <div>
          <img className="w-full " style={bannerStyles} src={banner} alt="" />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
