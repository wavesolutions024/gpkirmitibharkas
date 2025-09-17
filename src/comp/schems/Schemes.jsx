import React, { useState } from "react";
import "./Schemes.scss";
const Schemes = ({ translate }) => {
  const [active, setActive] = useState("state_government");

  const schemes = [
    {
      state_government: [
        {
          title: translate[0].schem1_PanchayatAwards,
          para: translate[0].schem1_PanchayatAwards_para,
          link: "http://myscheme.gov.in/schemes/lgss",
        },
        {
          title: translate[0].schem1_PM_SVANidhi,
          para: translate[0].schem1_PM_SVANidhi_para,
          link: "https://www.myscheme.gov.in/schemes/tssad",
        },
        {
          title: translate[0].schem1_pmmy,
          para: translate[0].schem1_pmmy_para,
          link: "https://www.myscheme.gov.in/schemes/ma-maha",
        },
        {
          title: translate[0].schem1_Pdduay,
          para: translate[0].schem1_pdduay_para,
          link: "https://www.myscheme.gov.in/schemes/spmsd",
        },
      ],
      Central_government: [
        {
          title: translate[0].schem2_PanchayatAwards,
          para: translate[0].schem2_PanchayatAwards_para,
          link: "https://www.myscheme.gov.in/schemes/sipocagi",
        },
        {
          title: translate[0].schem2_PM_SVANidhi,
          para: translate[0].schem2_PM_SVANidhi_para,
          link: "https://www.myscheme.gov.in/schemes/sfava",
        },
        {
          title: translate[0].schem2_pmmy,
          para: translate[0].schem2_pmmy_para,
          link: "https://www.myscheme.gov.in/schemes/asyadcf",
        },
        {
          title: translate[0].schem2_Pdduay,
          para: translate[0].schem2_pdduay_para,
          link: "https://www.myscheme.gov.in/schemes/pmmy",
        },
      ],
      Joint_Venture: [
        {
          title: translate[0].schem3_PanchayatAwards,
          para: translate[0].schem3_PanchayatAwards_para,
          link: "https://rdd.maharashtra.gov.in/en/scheme/revamped-rashtriy-gram-swaraj-abhiyan-2/",
        },
        {
          title: translate[0].schem3_PM_SVANidhi,
          para: translate[0].schem3_PM_SVANidhi_para,
          link: "https://rdd.maharashtra.gov.in/en/scheme/pandit-dindayal-upadhyay-panchayat-empowerment-award/",
        },
        // {
        //   title: translate[0].schem3_pmmy,
        //   para: translate[0].schem3_pmmy_para,
        // },
        // {
        //   title: translate[0].schem3_Pdduay,
        //   para: translate[0].schem3_pdduay_para,
        // },
      ],
    },
  ];
  return (
    <>
      <div class="schems_parent parent bg-img-cover" id="schemes">
        <div class="schemes_cont cont">
          <h3 class="heading">{translate[0].scheme}</h3>
          <div class="topbar">
            <div
              class={
                active === "state_government" ? "top_btn active" : "top_btn"
              }
              onClick={() => setActive("state_government")}
            >
              {translate[0].scheme1}
            </div>
            <div
              class={
                active === "Central_government" ? "top_btn active" : "top_btn"
              }
              onClick={() => setActive("Central_government")}
            >
              {translate[0].scheme2}
            </div>
            <div
              class={active === "Joint_Venture" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Joint_Venture")}
            >
              {translate[0].scheme3}
            </div>
          </div>
          {active === "state_government" && (
            <div class="bottom_bar">
              {schemes[0].state_government.map((item, index) => (
                <a href={item.link} class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </a>
              ))}
            </div>
          )}
          {active === "Central_government" && (
            <div class="bottom_bar">
              {schemes[0].Central_government.map((item, index) => (
                <a href={item.link} class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </a>
              ))}
            </div>
          )}
          {active === "Joint_Venture" && (
            <div class="bottom_bar">
              {schemes[0].Joint_Venture.map((item, index) => (
                <a href={item.link} class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Schemes;
