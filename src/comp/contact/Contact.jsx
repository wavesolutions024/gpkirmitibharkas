import React from 'react';
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_parent">
      <form className="form">
        <div className="input-wrap">
          <label htmlFor="fullname">Full Name</label>
          <input type="text"  name="fullname" placeholder="Enter your name"  />
        </div>
        <div className="input-wrap">
          <label htmlFor="contact">Contact</label>
          <input type="text"  name="contact" placeholder="Enter your phone number" />
        </div>
        <div className="input-wrap">
          <label htmlFor="email">Email</label>
          <input type="email"  name="email" placeholder="Enter your email" />
        </div>
        <div className="input-wrap">
          <label htmlFor="message">Message</label>
          <textarea name="message" placeholder="Type your message" />
        </div>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;