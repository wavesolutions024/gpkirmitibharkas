import React, { useState } from "react";
import "./Bottom_header.scss";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Bottom_Header = ({ translate }) => {
  const [active, setActive] = useState(false);
  return (
    <>
      {translate.map((item, index) => (
        <div class="bottom_header_parent parent" key={index}>
          <div class="bottom_header_cont cont">
            <a href="/#schemes">{item.header_Schemes}</a>
            <Link to="#">{item.header_Gallery}</Link>
            <Link href="">{item.header_Services}</Link>
            <a href="">{item.header_contact}</a>
            <Link to="/majivasundhara">{item.header_majivasundhara}</Link>
            <Link href="">{item.header_MukhyamantriSamudhi}</Link>
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
