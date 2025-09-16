import React from "react";
import "./Mahasanvad.scss";
import logo1 from "../../assets/image1.png";
import logo2 from "../../assets/image2.png";
import logo3 from "../../assets/image3.png";
import logo4 from "../../assets/image4.png";
import tai from "../../assets/pankajataimunde.jpg";

const Mahasanvad = () => {
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
              <h2>महासंवाद</h2>
              <p>
                स्थानिक स्वराज संस्थांमध्ये माझी वसुंधरा अभियान ६.० राबविणार –
                पर्यावरण व वातावरणीय बदल मंत्री पंकजा मुंडे
              </p>
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
