import React from "react";
import "./Footer.scss";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import { FiMail } from "react-icons/fi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinFill } from "react-icons/ri";
const Footer = () => {
  return (
    <>
      <div class="footer_parent parent">
        <div class="footer_cont cont">
          <div class="left">
            <div class="name">
              <h1>ग्रामपंचायत किरमिटी भारकस</h1>
              <h1>Panchayat Samiti Hingna, District Nagpur</h1>
            </div>
            <div class="logos">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
            </div>
          </div>
          <div class="middle">
            <h1>India</h1>
            <p>
              MH SH 255, Mahajanwadi, MH SH 255, Mahajanwadi, Dangarpura,
              Wanadongri, Maharashtra 440019
            </p>

            <a href="" class="mail">
              <span>
                <FiMail />
              </span>
              <p>grampanchayatkarmitibhar@gov.com</p>
            </a>
            <a href="" class="mail">
              <span>
                <MdOutlinePhoneAndroid />
              </span>
              <p>+9194567890</p>
            </a>
          </div>
          <div class="right">
            <h1>Social Media</h1>
            <div class="social_icons">
              <a href="">
                <BiLogoFacebook />
              </a>
              <a href="">
                <RiTwitterXFill />
              </a>
              <a href="">
                <FaInstagram />
              </a>
              <a href="">
                <RiLinkedinFill />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
