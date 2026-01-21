import React from "react";
import "./Gallery.scss";
import img1 from "../../assets/gallery/prize/prize/WhatsApp Image 2025-12-13 at 5.13.09 PM (1).jpeg";
import img2 from "../../assets/gallery/prize/prize/WhatsApp Image 2025-12-13 at 5.13.09 PM.jpeg";
import img3 from "../../assets/gallery/prize/prize/WhatsApp Image 2025-12-13 at 5.13.10 PM (2).jpeg";
import img4 from "../../assets/gallery/prize/prize/WhatsApp Image 2025-12-13 at 5.13.10 PM.jpeg";
import img5 from "../../assets/gallery/prize/prize/WhatsApp Image 2025-12-13 at 5.13.11 PM.jpeg";
import img6 from "../../assets/gallery/qr/qr/qr banner.jpeg";
import img7 from "../../assets/gallery/qr/qr/WhatsApp Image 2025-12-13 at 4.40.51 PM.jpeg";
import img8 from "../../assets/gallery/qr/qr/WhatsApp Image 2025-12-13 at 4.40.53 PM.jpeg";
import img9 from "../../assets/gallery/swachh abhiyan/swachh abhiyan/WhatsApp Image 2025-12-13 at 3.28.07 PM.jpeg";
import img10 from "../../assets/gallery/swachh abhiyan/swachh abhiyan/WhatsApp Image 2025-12-13 at 3.28.08 PM (1).jpeg";
import img11 from "../../assets/gallery/swachh abhiyan/swachh abhiyan/WhatsApp Image 2025-12-13 at 3.28.11 PM.jpeg";
import img12 from "../../assets/gallery/vruksh lagwad/vruksh lagwad/Copy of WhatsApp Image 2025-12-13 at 2.01.46 PM.jpeg";
import img13 from "../../assets/gallery/vruksh lagwad/vruksh lagwad/WhatsApp Image 2025-12-13 at 2.01.46 PM (1).jpeg";
import img14 from "../../assets/gallery/vruksh lagwad/vruksh lagwad/WhatsApp Image 2025-12-13 at 2.02.02 PM.jpeg";
import img15 from "../../assets/gallery/vruksh lagwad/vruksh lagwad/WhatsApp Image 2025-12-13 at 2.02.09 PM.jpeg";
import img16 from "../../assets/gallery/vruksh lagwad/vruksh lagwad/WhatsApp Image 2025-12-13 at 2.02.09 PM (1).jpeg";
import img17 from "../../assets/gallery/लखपती दीदी/लखपती दीदी/WhatsApp Image 2026-01-06 at 16.58.25 (1).jpeg";
import img18 from "../../assets/gallery/लखपती दीदी/लखपती दीदी/WhatsApp Image 2026-01-06 at 16.58.25 (2).jpeg";
import img19 from "../../assets/gallery/लखपती दीदी/लखपती दीदी/WhatsApp Image 2026-01-06 at 16.58.26 (1).jpeg";
import img20 from "../../assets/gallery/लखपती दीदी/लखपती दीदी/WhatsApp Image 2026-01-06 at 16.58.26.jpeg";

const Gallery = () => {
  const data = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
  ];

  return (
    <>
      <div className="parent gallery_parent">
        <div className="cont gallery_cont">
          <h2>Gallery</h2>
          <div class="imagess">
            {data.map((item) => (
              <div className="box">
                <img src={item} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
