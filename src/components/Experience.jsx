import React from "react";
import experience from "./Data/experience.json";

const Experience = () => {
  return (
    <>
      <div className="container ex " id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <React.Fragment key={data.id}>

              <div className="row">
                <div className="col-md-12 col-sm-12 col-lg-12 ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
                >
                
                <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt=""  className="img-fluid"/>
                </div>

                <div className="right">
                  <h2>{data.role}</h2>
                  <h4>
                    {data.startDate} {data.endDate} {data.location}
                  </h4>

                  <h5>{data.experiences[0]}</h5>
                  <h5>{data.experiences[1]}</h5>
                </div>
              </div>

                </div>
              
             
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Experience;
