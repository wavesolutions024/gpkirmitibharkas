import React, { useEffect, useState } from "react";
import "./Bottom_header.scss";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { SlSocialFacebook } from "react-icons/sl";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
const Bottom_Header = ({ translate, setLang, lang }) => {
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);

  const translateTogglle = (para) => {
    setLang(para);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 250) {
        setActive2(true);
      } else {
        setActive2(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  },[]);
  return (
    <>
      {translate.map((item, index) => (
        <div class={active2 ? "bottom_header_parent parent active" : "bottom_header_parent parent"} key={index}>
          <div class="bottom_header_cont cont">
            <div class="left">
              <a href="/#schemes">{item.header_Schemes}</a>
              <Link to="#">{item.header_Gallery}</Link>
              <Link href="">{item.header_Services}</Link>
              <a href="">{item.header_contact}</a>
              <Link to="/majivasundhara">{item.header_majivasundhara}</Link>
              <Link href="">{item.header_MukhyamantriSamudhi}</Link>
            </div>

            <div class="right">
              <a href="">
                <SlSocialFacebook />
              </a>
              <a href="">
               <IoLogoYoutube />
              </a>
              <a href="">
                <FaInstagram />
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
          <div class="mobile_nav cont">
            {active ? (
              <div class="cross" onClick={() => setActive(false)}>
                <RxCross2 />
              </div>
            ) : (
              <div class="hamburger" onClick={() => setActive(true)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

                   <div class="right">
              <a href="">
                <SlSocialFacebook />
              </a>
              <a href="">
               <IoLogoYoutube />
              </a>
              <a href="">
                <FaInstagram />
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

          <div
            class={
              active
                ? "mobile_nav_option cont active"
                : "mobile_nav_option cont"
            }
          >
            <Link href="">{item.header_Schemes}</Link>
            <Link href="">{item.header_Gallery}</Link>
            <Link href="">{item.header_Services}</Link>
            <Link href="">{item.header_contact}</Link>
            <Link href="">{item.header_majivasundhara}</Link>
            <Link href="">{item.header_MukhyamantriSamudhi}</Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Bottom_Header;
