import React, { useState } from "react";
import "./MajiVasundhara.scss";
const MajiVasundhara = () => {
  const [active, setActive] = useState("Videos");
  return (
    <>
      <div class="maji_vasundhara_parent parent">
        <div class="maji_vasundhara_cont cont">
          <div class="top_bar">
            <div
              class={active === "Videos" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Videos")}
            >
              Videos
            </div>
            <div
              class={active === "Photos" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Photos")}
            >
              Photos
            </div>
          </div>
          <div class="bottom_section">
            <div class="card"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MajiVasundhara;
