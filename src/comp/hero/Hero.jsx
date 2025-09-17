import React, { useEffect } from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";
import slide1 from "../../assets/slide1.jpeg";
import slide2 from "../../assets/slide2.jpeg";
import slide3 from "../../assets/slide3.jpeg";

const Hero = ({ translate }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="parent hero-parent bg-img-cover" data-aos="fade-up">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="hero-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 1" className="hero-slide-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 1" className="hero-slide-img" />
        </SwiperSlide>
      </Swiper>

      <div className="custom-marquee">
        <span className="marquee-text">{translate?.[0]?.marque_title}</span>
      </div>
    </div>
  );
};

export default Hero;
