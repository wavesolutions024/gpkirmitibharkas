import React, { useState } from "react";
import "./Bottom_header.scss";
import { Link } from "react-router-dom";
const Bottom_Header = ({ translate }) => {
    const [active,setActive] = useState(false)
  return (
    <>
      {translate.map((item, index) => (
        <div class="bottom_header_parent parent" key={index}>
          <div class="bottom_header_cont cont">
            <Link href="">{item.header_Schemes}</Link>
            <Link href="">{item.header_Gallery}</Link>
            <Link href="">{item.header_Services}</Link>
            <Link href="">{item.header_contact}</Link>
            <Link href="">{item.header_majivasundhara}</Link>
            <Link href="">{item.header_MukhyamantriSamudhi}</Link>
          </div>
          <div class="mobile_nav cont">
            <div class="hamburger" onClick={()=>setActive(true)} >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div class={active ? "mobile_nav_option cont active" : "mobile_nav_option cont"}>

          </div>
        </div>
      ))}
    </>
  );
};

export default Bottom_Header;
