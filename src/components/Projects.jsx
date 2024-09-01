import React from "react";
import project from "./Data/projects.json";
const Projects = () => {
  return (
    <>
      <div className="container projects  mb-3" id="project">
        <h1>Projects</h1>

        <div className="row d-flex align-items-center justify-content-center">
          {project.map((data) => {
            return (
              <div
                key={data.id}
                className="my-3 col-md-4 col-lg-3 col-sm-6  "
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div
                  className="card  bg-dark text-light "
                  style={{
                    width: "15rem",
                    border: "1px solid yellow",
                    boxShadow: " 5px 5px 10px 0px rgba(101,175,10,0.5)",
                  }}
                >
                  <div className="img d-flex align-items-center justify-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "200px",
                        height: "200px",
                        border: "2px solid yellow",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="card-body text-center ">
                    <h5 className="card-title ">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href={data.demo} className="btn btn-primary">
                      Demo
                    </a>

                    <a href={data.code} className="btn bg-warning mx-4">
                      Code
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
