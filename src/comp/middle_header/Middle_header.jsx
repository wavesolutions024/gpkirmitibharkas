import React from "react";
import "./Middle_header.scss";
import flag from "../../assets/Wave_Flag.gif";
import logo from "../../assets/logo.png";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
const Middle_header = () => {
  return (
    <>
      <div class="middle_header_parent parent">
        <div class="overlay bg-img-cover">
          <img src={flag} alt="" />
          <div class="overlay_bg"></div>
        </div>
        <div class="middle_header_cont cont">
          <div class="left">
            <div class="logo">
              <img src={logo} alt="" />
            </div>
            <div class="name">
              <h1>ग्रामपंचायत किरमिटी भारकस</h1>
              <h1>Panchayat Samiti Hingna, District Nagpur</h1>
            </div>
          </div>

          <div class="right">
            <img src={image1} alt=""/>
            <img src={image2} alt=""/>
            <img src={image3} alt=""/>
            <img src={image4} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Middle_header;
