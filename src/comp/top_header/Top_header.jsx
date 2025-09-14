import React from "react";
import "./Top_header.scss";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
const Top_header = () => {
  return (
    <>
      <div class="top_header_parent parent">
        <div class="top_header_cont cont">
          <div class="left">
            <h1>भारत सरकार</h1>
            <h1>Government Of India</h1>
          </div>
          <div class="right">
            <a href="">
              <SlSocialFacebook />
            </a>
            <a href="">
              <FaXTwitter />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FiLinkedin />
            </a>

            <div class="toggle_btn">
              <div class="button active">Eng</div>
              <div class="button">मराठी</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top_header;
