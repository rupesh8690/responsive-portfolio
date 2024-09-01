import React from "react";
import pdf from "../pdf/resume.pdf";
import hero from "./Data/hero.json";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

const Home = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my profile",
        "My name is John Doe",
        "I am a Full Stack Developer",
        "Android Developer (React Native)",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    // Initialize Typed.js
    const typed = new Typed(typedRef.current, options);

    // Cleanup on unmount
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="row home" id="home">
        <div
          className="col-md-6 left "
          data-aos="fade-up-right"
          data-aos-duration="1000"
        >
          <h3 ref={typedRef}></h3>
           
          <a
            href={pdf}
            download="resume.pdf"
            className="btn btn-outline-warning my-3"
          >
            Download Resume
          </a>
        </div>

        <div className="col-md-6 d-flex align-items-center justify-content-center right">
        <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={`/assets/${hero.imgSrc}`} alt="hero" />
          </div>

        </div>
      </div>

     
    </>
  );
};

export default Home;
