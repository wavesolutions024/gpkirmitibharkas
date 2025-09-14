import React from "react";
import "./Bottom_header.scss";
const Bottom_Header = ({ translate }) => {
  return (
    <>
      {translate.map((item, index) => (
        <div class="bottom_header_parent parent" key={index}>
          <p>{item.header_Schemes}</p>
        </div>
      ))}
    </>
  );
};

export default Bottom_Header;
