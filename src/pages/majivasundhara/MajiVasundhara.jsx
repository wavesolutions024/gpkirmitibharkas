import React, { useState } from "react";
import "./MajiVasundhara.scss";
import ReactPlayer from "react-player";

import clean1 from "../../assets/gallery/clean/clean1.mp4"
const MajiVasundhara = () => {
  const [active, setActive] = useState("Videos");
  const [data, setData] = useState("स्वच्छ सर्व्हेक्षण ग्रामीण 2025");

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
            <div class="folders">
              <div
                class={
                  data === "स्वच्छ सर्व्हेक्षण ग्रामीण 2025"
                    ? "top_btn active"
                    : "top_btn"
                }
                onClick={() => setData("स्वच्छ सर्व्हेक्षण ग्रामीण 2025")}
              >
                स्वच्छ सर्व्हेक्षण ग्रामीण 2025
              </div>
            </div>

            {data === "स्वच्छ सर्व्हेक्षण ग्रामीण 2025" && (
              <div class="data">
                <div class="card">
                  <ReactPlayer
                    url={clean1}
                    height="100%"
                    width="100%"
                    className="react-video"
                    controls={true}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MajiVasundhara;
