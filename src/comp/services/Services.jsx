import React from "react";
import "./Services.scss";

const Services = () => {
  const data = [
    "Birth Certificate",
    "Death Certificate",
    "Resident Certificate",
    "Marriage Certificate",
    "No Due Certificate",
    "Other",
  ];

  const update = [
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
    "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति दिनांक: 03/09/2025",
  ]

  return (
    <>
      <div className="parent service-parent">
        <div className="cont service-cont">
          <div className="service-wrap">
            <div className="service-top-site"></div>
            <h3>Services</h3>

            {data.map((item) => (
              <div className="list">{item}</div>
            ))}
          </div>

          <div className="new-wrap">
            <div className="news-top-site">
              {update.map((item) => (
                <div className="news-list">{item}</div>
              ))}
            </div>
            <h3>New Updates</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
