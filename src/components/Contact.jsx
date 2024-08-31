import React from "react";

const Contact = () => {
  return (
    <>
     <h1>Contact</h1>
      <div className="container contact"
      id="contact"
      >
        <a href="https://www.google.com" target="_blank" className="items">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="https://www.google.com" target="_blank" className="items">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.google.com" target="_blank" className="items">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://www.google.com" target="_blank" className="items">
          <i className="fa-brands fa-github" />
        </a>
        <a href="mailto:rupeshlove8690@gmail.com" target="_blank" className="items">
          <i className="fa-regular fa-envelope" />
        </a>
        
      </div>
    </>
  );
};

export default Contact;
