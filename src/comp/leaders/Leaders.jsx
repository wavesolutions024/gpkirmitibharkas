import React from "react";
import "./Leaders.scss";
import fd from "../../assets/fd.png";
import shinde from "../../assets/es.png";
import pawar from "../../assets/ap.png";
import meghe from "../../assets/sm.png";
import atish from "../../assets/atish.png";
import punam from "../../assets/punam.png";
import roshni from "../../assets/roshni.png";

const Leaders = () => {
  return (
    <>
      <div class="leaders_parent parent">
        <div class="leader_cont cont">
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={fd} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Hon'ble Chief Minister</div>
              <h3 class="name">Shri. Devendra Fadnavis</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={shinde} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Hon'ble Deputy Chief Minister</div>
              <h3 class="name">Shri. Eknath Shinde</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={pawar} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Hon'ble Deputy Chief Minister</div>
              <h3 class="name">Shri. Ajit Pawar</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={meghe} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">MLA - Hingna Consitency,
                Maharastra Legislative Assembly
              </div>
              <h3 class="name">Shri. Sameer Meghe
              </h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={atish} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Leader of opposition
                Zilla parishad, Nagpur </div>
              <h3 class="name">Shri. Atish Umare</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={roshni} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Sarpanch
                Gram Panchayat Kirmiti Bharkas </div>
              <h3 class="name">Smt. Roshani Umare</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
          <div class="card">
            <div class="top_section">
              <div class="image">
                <img src={punam} alt="" />
              </div>
            </div>
            <div class="bottom_section">
              <div class="label">Secretary
                Gram Panchayat Kirmiti Bharkas</div>
              <h3 class="name">Smt. Punam Kalsarpe</h3>
              <p class="para">
                The Rural Development Department was established on May 1, 1960.
                The Rural Development Department of the Government of
                Maharashtra is working for the all-round development of rural
                areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leaders;
