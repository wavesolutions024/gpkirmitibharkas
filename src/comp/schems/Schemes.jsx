import React, { useState } from "react";
import "./Schemes.scss";
const Schemes = () => {
  const [active, setActive] = useState("state_government");

  const schemes = [
    {
      state_government: [
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "Pradhan Mantri MUDRA Yojana (PMMY), Ministry of Finance, Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon'ble Prime Minister",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "Centrally Sponsored Scheme ; 2, Deen Dayal Upadhyaya Antyodaya Yojana, Ministry of Housing and urban affairs ; 3, PM Svanidhi Yojna",
        },
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
      ],
      Central_government: [
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "Pradhan Mantri MUDRA Yojana (PMMY), Ministry of Finance, Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon'ble Prime Minister",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "Centrally Sponsored Scheme ; 2, Deen Dayal Upadhyaya Antyodaya Yojana, Ministry of Housing and urban affairs ; 3, PM Svanidhi Yojna",
        },
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
      ],
      Joint_Venture: [
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "Pradhan Mantri MUDRA Yojana (PMMY), Ministry of Finance, Pradhan Mantri MUDRA Yojana (PMMY) is a scheme launched by the Hon'ble Prime Minister",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "Centrally Sponsored Scheme ; 2, Deen Dayal Upadhyaya Antyodaya Yojana, Ministry of Housing and urban affairs ; 3, PM Svanidhi Yojna",
        },
        {
          title: "Panchayat Awards",
          para: "Ayushman Bharat-Pradhan Mantri Jan Arogya Yojana (AB-PMJAY) · Eligibility. Those living in scheduled caste and scheduled tribe households.",
        },
        {
          title: "PM- SVANidhi",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Pradhan Mantri Mudra Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
        {
          title: "Deen Dayal Upadhyaya Antyodaya Yojana",
          para: "PM- SVANidhi Scheme, M/o Housing & Urban Affairs, Prime Minister Street Vendor's Atma Nirbhar Nidhi (PM SVANidhi) Scheme since June 01, 2020",
        },
      ],
    },
  ];
  return (
    <>
      <div class="schems_parent parent bg-img-cover" id="schemes" >
        <div class="schemes_cont cont">
          <h3 class="heading">Schemes</h3>
          <div class="topbar">
            <div
              class={
                active === "state_government" ? "top_btn active" : "top_btn"
              }
              onClick={() => setActive("state_government")}
            >
              State Government Schemes
            </div>
            <div
              class={
                active === "Central_government" ? "top_btn active" : "top_btn"
              }
              onClick={() => setActive("Central_government")}
            >
              Central Government Scheme
            </div>
            <div
              class={active === "Joint_Venture" ? "top_btn active" : "top_btn"}
              onClick={() => setActive("Joint_Venture")}
            >
              Joint Venture (S+C)
            </div>
          </div>
          {active === "state_government" && (
            <div class="bottom_bar">
              {schemes[0].state_government.map((item, index) => (
                <div class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </div>
              ))}
            </div>
          )}
          {active === "Central_government" && (
            <div class="bottom_bar">
              {schemes[0].Central_government.map((item, index) => (
                <div class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </div>
              ))}
            </div>
          )}
          {active === "Joint_Venture" && (
            <div class="bottom_bar">
              {schemes[0].Joint_Venture.map((item, index) => (
                <div class="card" key={index}>
                  <h5 class="heading"> {item.title} </h5>
                  <p class="para">{item.para}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Schemes;
