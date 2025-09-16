import React from "react";
import "./Leaders.scss";
import fd from "../../assets/fd.png";
import shinde from "../../assets/es.png";
import pawar from "../../assets/ap.png";
import meghe from "../../assets/sm.png";
import atish from "../../assets/atish.png";
import punam from "../../assets/punam.png";
import roshni from "../../assets/roshni.png";




const Leaders = ({translate}) => {

  return (
    <>
      {translate.map((item, index) => (
        <div class="leaders_parent parent" key={index}>
          <div class="leader_cont cont">
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={fd} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.devendra_status}</div>
                <h3 class="name">{item.devendra_name}</h3>
                <p class="para">{item.devendra_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={shinde} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.eknath_status}</div>
                <h3 class="name">{item.eknath_name}</h3>
                <p class="para">{item.eknath_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={pawar} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.ajit_status}</div>
                <h3 class="name">{item.ajit_name}</h3>
                <p class="para">{item.ajit_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={fd} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.jaykumar_status}</div>
                <h3 class="name">{item.jaykumar_name}</h3>
                <p class="para">{item.jaykumar_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={fd} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.yogesh_status}</div>
                <h3 class="name">{item.yogesh_name}</h3>
                <p class="para">{item.yogesh_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={fd} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.ek_status}</div>
                <h3 class="name">{item.ek_name}</h3>
                <p class="para">{item.ek_desc}</p>
              </div>
            </div>
            <div class="card">
              <div class="top_section">
                <div class="image">
                  <img src={fd} alt="" />
                </div>
              </div>
              <div class="bottom_section">
                <div class="label">{item.devendra_status}</div>
                <h3 class="name">{item.devendra_name}</h3>
                <p class="para">{item.devendra_desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Leaders
