import React from "react";
import "./Contact.scss";
import { RxCross2 } from "react-icons/rx";

const Contact = ({ setContact }) => {
  function Submit(e) {
    e.preventDefault();

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    const date = new Date().toDateString();

    formDatab.append("date", date);

    fetch(
      "https://script.google.com/macros/s/AKfycbxmahtYoNMDESWm--t5qdw49xTB7FbtwDpnwcvC0L-75L5EmNh6HFp3kyi2_EbBlW2P2g/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        alert(data);
        formEle.reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong. Please try again.");
      });
  }

  return (
    <div className="contact_parent">
      <form className="form" onSubmit={Submit} >
        <div class="cross" onClick={() => setContact(false)}>
          <RxCross2 />
        </div>
        <div className="input-wrap">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" name="name" placeholder="Enter your name" />
        </div>
        <div className="input-wrap">
          <label htmlFor="contact">Contact</label>
          <input
            type="text"
            name="contact"
            placeholder="Enter your phone number"
          />
        </div>
        <div className="input-wrap">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="input-wrap">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Type your message" />
        </div>
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
