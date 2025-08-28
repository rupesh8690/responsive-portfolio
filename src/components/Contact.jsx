import React from "react";

const Contact = () => {
  return (
    <>
     <h1>Contact</h1>
      <div className="container contact mb-5"
      id="contact"
      >
      
        <a href="https://www.facebook.com/rupesh.love.9/" target="_blank" className="items">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="https://www.linkedin.com/in/rupesh-thakur-b5738a32a/" target="_blank" className="items">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="https://github.com/rupesh8690" target="_blank" className="items">
          <i className="fa-brands fa-github" />
        </a>
        <a href="mailto:rupesh242@outlook.com" target="_blank" className="items">
          <i className="fa-regular fa-envelope" />
        </a>
        
      </div>
    </>
  );
};

export default Contact;
