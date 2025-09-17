import React from "react";
import "./Mahasanvad.scss";
import logo1 from "../../assets/image1.png";
import logo2 from "../../assets/image2.png";
import logo3 from "../../assets/image3.png";
import logo4 from "../../assets/image4.png";
import tai from "../../assets/pankajataimunde.jpg";

const Mahasanvad = ({ translate }) => {
  return (
    <>
      <div className="parent maha-parent bg-img-cover">
        <div className="cont maha-cont">
          <div className="icons">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>

          <div className="content">
            <div className="left">
              <h2>{translate[0].mahasamvad} </h2>
              <p>{translate[0].mahasamvad_para}</p>
            </div>
            <div className="right">
              <img src={tai} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mahasanvad;
