import React from "react";
import "./Popup.scss";

const Popup = ({ listing, setClose }) => {
  
    
  return (
    <>
      <div className="pop-parent" onClick={() => setClose(false)}>
      
          <div className="main-box">
            <div class="heding">{listing.label}</div>
            <ul>
              {listing?.children?.map((item, index) => (
                <li key={index}>
                 {item}
                </li>
              ))}
            </ul>
          </div>
        
      </div>
    </>
  );
};

export default Popup;
