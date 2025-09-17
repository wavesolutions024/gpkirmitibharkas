import React, { useEffect } from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import AOS from "aos";

const Hero = () => {

   useEffect(() => {
    AOS.init({
      duration: 1200, 
      once: false, 
      mirror: true,
    });
      AOS.refresh();

  }, []);


const data = [
  "Breaking News: Event 1",
  "Update: Event 2",
  "Alert: Event 3"
];

const marqueeText = data.join("  |  ");


  return (
    <div className="parent hero-parent bg-img-cover"  data-aos="fade-up" >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="custom-marquee">
        <span className="marquee-text">{marqueeText}</span>
      </div>
    </div>
  );
};

export default Hero;