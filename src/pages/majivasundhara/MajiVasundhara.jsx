import React, { useState } from "react";
import "./MajiVasundhara.scss";
import ReactPlayer from "react-player";

import clean1 from "../../assets/gallery/clean/clean1.mp4";
import img1 from "../../assets/gallery/clean/clean_img1.jpeg";
import img2 from "../../assets/gallery/clean/clean_img2.jpeg";
import img3 from "../../assets/gallery/clean/clean_img3.jpeg";
import img4 from "../../assets/gallery/clean/clean_img4.jpeg";
import img5 from "../../assets/gallery/clean/clean_img5.jpeg";

import p1 from "../../assets/palkhi/palkhi1.jpeg";
import p2 from "../../assets/palkhi/palkhi2.jpeg";
import p3 from "../../assets/palkhi/palkhi3.jpeg";
import p4 from "../../assets/palkhi/palkhi4.jpeg";
import p5 from "../../assets/palkhi/palkhi5.jpeg";

const MajiVasundhara = () => {
  const [active, setActive] = useState("Videos");
  const [data, setData] = useState("स्वच्छ सर्व्हेक्षण ग्रामीण 2025");


  return (
    <>data1
      <div className="maji_vasundhara_parent parent">
        <div className="maji_vasundhara_cont cont">
          {/* Top Tabs */}
          <div className="top_bar">
            <div
              className={active === "Videos" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Videos")}
            >
              Videos
            </div>
            <div
              className={active === "Photos" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Photos")}
            >
              Photos
            </div>
          </div>

          {/* Videos Section */}
          {active === "Videos" && (
            <div className="bottom_section">
              <div className="data">
                <div className="card">
                  No Videos Found...
                  {/* <ReactPlayer
                      url={clean1}
                      height="100%"
                      width="100%"
                      className="react-video"
                      controls={true}
                    /> */}
                </div>
              </div>
            </div>
          )}

          {/* Photos Section */}
          {active === "Photos" && (
            <div className="bottom_section">
              <div className="folders">
                <div
                  className={
                    data === "स्वच्छ सर्व्हेक्षण ग्रामीण 2025"
                      ? "top_btn active"
                      : "top_btn"
                  }
                  onClick={() => setData("स्वच्छ सर्व्हेक्षण ग्रामीण 2025")}
                >
                  स्वच्छ सर्व्हेक्षण ग्रामीण 2025
                </div>

                <div
                  className={
                    data === "संत ज्ञानेश्वर महाराज पालखी 750 वा सोहळा"
                      ? "top_btn active"
                      : "top_btn"
                  }
                  onClick={() =>
                    setData("संत ज्ञानेश्वर महाराज पालखी 750 वा सोहळा")
                  }
                >
                 संत ज्ञानेश्वर महाराज पालखी 750 वा सोहळा
                </div>
              </div>

              {data === "स्वच्छ सर्व्हेक्षण ग्रामीण 2025" && (
                <div className="data">
                  <div className="card">
                    <img src={img1} alt="" />
                  </div>

                  <div className="card">
                    <img src={img2} alt="" />
                  </div>

                  <div className="card">
                    <img src={img3} alt="" />
                  </div>

                  <div className="card">
                    <img src={img4} alt="" />
                  </div>

                  <div className="card">
                    <img src={img5} alt="" />
                  </div>
                </div>
              )}

              {data === "संत ज्ञानेश्वर महाराज पालखी 750 वा सोहळा" && (
                <div className="data">
                  <div className="card">
                    <img src={p1} alt="" />
                  </div>

                  <div className="card">
                    <img src={p2} alt="" />
                  </div>

                  <div className="card">
                    <img src={p3} alt="" />
                  </div>

                  <div className="card">
                    <img src={p4} alt="" />
                  </div>

                  <div className="card">
                    <img src={p5} alt="" />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MajiVasundhara;
