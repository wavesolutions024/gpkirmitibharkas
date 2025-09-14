import React from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Hero = () => {


const data = [
  "Breaking News: Event 1",
  "Update: Event 2",
  "Alert: Event 3"
];

const marqueeText = data.join("  |  ");


  return (
    <div className="parent hero-parent bg-img-cover">
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