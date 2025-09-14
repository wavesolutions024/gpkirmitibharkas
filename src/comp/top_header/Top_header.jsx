import React from "react";
import "./Top_header.scss";
import { SlSocialFacebook } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";

const Top_header = ({ setLang, lang }) => {
  const translateTogglle = (para) => {
    setLang(para);
  };

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
              <div
                class={lang === "English" ? "button active" : "button"}
                onClick={() => translateTogglle("English")}
              >
                Eng
              </div>
              <div
                class={lang === "Marathi" ? "button active" : "button"}
                onClick={() => translateTogglle("Marathi")}
              >
                मराठी
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Top_header;
