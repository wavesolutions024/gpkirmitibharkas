import React, { useEffect } from "react";
import "./Hero.scss";
import { Swiper, SwiperSlide } from "swiper/react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Hero = () => {
//   useEffect(() => {
//     AOS.init({ duration: 1000, easing: "ease-in-out" });
//   }, []);
  return (
    <>
      <div className="parent hero-parent">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Hero;
