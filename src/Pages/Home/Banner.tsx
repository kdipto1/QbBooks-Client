import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner from "../../Images/Banner/banner.webp";
import banner1 from "../../Images/Banner/banner1.webp";
import b from "../../Images/Banner/b.webp";
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
    adaptiveHeight: true,
  };
  const bannerStyles = {
    height: "75vh",
  };
  return (
    <section>
      <Slider {...settings} className="h-[75vh]">
        <div>
          <img
            className="w-full"
            style={bannerStyles}
            src={b}
            alt=""
            fetchPriority="high"
          />
        </div>
        <div>
          <img
            className="w-full "
            style={bannerStyles}
            src={banner1}
            alt=""
            fetchPriority="high"
          />
        </div>
        <div>
          <img
            className="w-full "
            style={bannerStyles}
            src={banner}
            alt=""
            fetchPriority="high"
          />
        </div>
      </Slider>
    </section>
  );
};

export default Banner;
