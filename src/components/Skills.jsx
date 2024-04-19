import React, { useState } from 'react';
import "./Skills.css"

function Skills({ skills }) {
  const [showAll, setShowAll] = useState(false);
  const initialSkillsCount = 6;
  const [visibleSkills, setVisibleSkills] = useState(skills.slice(0, initialSkillsCount));

  const handleShowMore = () => {
    setShowAll(true);
    setVisibleSkills(skills);
  };

  return (
    <section className="ftco-section new-padd" id="skills-section">
      <div className="container">
        <div className="row justify-content-center ">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <h1 className="big big-2 font-bold">Skills</h1>
            <h2 className="mb-4 text-white font-semibold">My Skills</h2>
          </div>
        </div>
        <div className="row">
          {visibleSkills.map((skill, index) => (
            <div key={skill._id} className="col-md-6 animate-box">
              <div className="progress-wrap ftco-animate">
                <h3>{skill.name}</h3>
                <div className="progress">
                  <div
                    className={`progress-bar color-${Math.floor(Math.random() * 6) + 1}`}
                    role="progressbar"
                    aria-valuenow={skill.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: `${skill.percentage}%` }}
                  >
                    <span>{skill.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && (
          <div className="row justify-content-center mt-4">
            <div className="col-md-6 text-center">
              <button className="btn btn-dark  bg-slate-500" onClick={handleShowMore}>Show More</button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Skills;
