import React from 'react';
import skills from './Data/skills.json'; // Ensure this path is correct

const Skills = () => {
  return (
    <div className="container skills" id="skill">
      <h1>SKILLS</h1>
      <div className="row">
        {skills.map((data) => (
          <div className="col-lg-4 col-md-6 " key={data.id} >
            <div className="item" data-aos="flip-left"
          data-aos-duration="1000">
              <img src={`/assets/${data.imageSrc}`} alt={data.name} />
              <h3>{data.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
