import React, { useState } from "react";
import "./Services.scss";
import Popup from "../../pages/popup/Popup";

const Services = () => {
  const [close, setClose] = useState(false);
  const [activeIndex, setActiveIndex] = useState();

  const data = [
    {
      label: "Birth Certificate",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
    {
      label: "Death Certificate",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
    {
      label: "Resident Certificate",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
    {
      label: "Marriage Certificate",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
    {
      label: "No Due Certificate",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
    {
      label: "Other",
      children: ["लाभार्थी आधार कार्ड झेरॉक्स", "आई वडील आधार कार्ड झेरॉक्स"],
    },
  ];

  const update = [
    {
      news: "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति",
      date: "03/09/2025",
    },
    {
      news: "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति",
      date: "03/09/2025",
    },
    {
      news: "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति",
      date: "03/09/2025",
    },
    {
      news: "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति",
      date: "03/09/2025",
    },
    {
      news: "विज्ञप्ति :परामर्शी हेतु आवेदन आमंत्रण...... विज्ञप्ति",
      date: "03/09/2025",
    },
  ];

  const handleOpen = (index) => {
    setClose(true);
    setActiveIndex(index)
  };

  return (
    <>
   {  close &&  <Popup listing={data[activeIndex]} setClose={setClose} />}

      <div className="parent service-parent" >
        <div className="cont service-cont">
          <div className="service-wrap">
            <div className="service-top-site"></div>
            <h3>Services</h3>

            {data.map((item, index) => (
              <div className="list" onClick={() => handleOpen(index)}>{item.label}</div>
            ))}
          </div>

          <div className="new-wrap">
            <div className="news-top-site"></div>
            <h3>New Updates</h3>
            {update.map((update) => (
              <div className="news-list">
                <div class="news">{update.news}</div>
                <div class="date">{update.date}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
